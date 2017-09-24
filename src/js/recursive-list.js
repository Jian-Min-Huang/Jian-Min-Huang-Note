const fs = require("fs");
const path = require("path");

let pathMap = new Map();
let fileMap = new Map();

function showDirRecur(base) {
    let files = fs.readdirSync(base);
    files.forEach(function (file) {
        let _file = fs.statSync(path.join(base, file));

        if (_file.isDirectory()) {
            let fileName = file.replace("_files", "");

            if (!fs.existsSync(path.join(base, fileName + ".htm"))) showDirRecur(path.join(base, file));
        } else if (_file.isFile() && !file.startsWith(".")) {
            if (pathMap.has(base)) {
                pathMap.get(base).push(path.join(base, file));
                fileMap.get(base).push(file);
            } else {
                pathMap.set(base, [path.join(base, file)]);
                fileMap.set(base, [file]);
            }
        }
    });
}

function generateDynamicContent(contentPath, distPath) {
    pathMap = new Map();
    fileMap = new Map();

    showDirRecur(`${contentPath}/`);

    let outputArray = "";
    let outputTag = "";

    for (let key of pathMap.keys()) {
        outputArray += `let ${key.replace("content/", "").replace(/\//g, "_")} = [\n`;

        for (let i = 0; i < pathMap.get(key).length; i++) {
            if (key.replace("content/", "").replace(/\//g, "_") === "notes") {
                outputArray += `\t{type: "md", href: "../${pathMap.get(key)[i]}", text: "${fileMap.get(key)[i].replace(".md", "")}"}`;
            } else {
                outputArray += `\t{type: "iframe", href: "../${pathMap.get(key)[i]}", text: "${fileMap.get(key)[i].replace(".htm", "")}"}`;
            }


            if (i !== pathMap.get(key).length - 1) {
                outputArray += ",\n";
            }
        }

        outputArray += "\n];\n\n";

        outputTag += `let ${key.replace("content/", "").replace(/\//g, "_")}_tags = [];\n`;
    }

    fs.writeFileSync(`${distPath}/dynamic-content`, outputArray + outputTag);
}

exports.generateDynamicContent = generateDynamicContent;