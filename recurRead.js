let fs = require("fs"), path = require("path");

let map = new Map();
let fileMap = new Map();

function showDirRecur(base) {
    let files = fs.readdirSync(base);
    files.forEach(function (file) {
        let _file = fs.statSync(path.join(base, file));

        if (_file.isDirectory()) {
            let fileName = file.replace("_files", "");
            if (fs.existsSync(path.join(base, fileName + ".htm"))) {
                // console.log(`skip ${path.join(base, file)}`);
            } else {
                showDirRecur(path.join(base, file));
            }
        } else if (_file.isFile() && !file.startsWith(".")) {
            if (map.has(base)) {
                map.get(base).push(path.join(base, file));
                fileMap.get(base).push(file);
            } else {
                map.set(base, [path.join(base, file)]);
                fileMap.set(base, [file]);
            }
        }
    });
}

showDirRecur("./content/");

// console.log(map);

let outputText = "";
let outputKey = "";

for (let key of map.keys()) {
    outputText += `var ${key.replace("content/", "").replace(/\//g, "_")} = [\n`;

    for (let i = 0; i < map.get(key).length; i++) {
        if (key.replace("content/", "").replace(/\//g, "_") === "notes") {
            outputText += `\t{type: "md", href: "../${map.get(key)[i]}", text: "${fileMap.get(key)[i].replace(".md", "")}"}`;
        } else {
            outputText += `\t{type: "iframe", href: "../${map.get(key)[i]}", text: "${fileMap.get(key)[i].replace(".htm", "")}"}`;
        }


        if (i !== map.get(key).length - 1) {
            outputText += ",\n";
        }
    }

    outputText += "\n];\n\n";

    outputKey += `var ${key.replace("content/", "").replace(/\//g, "_")}_tags = [];\n`;
}

// console.log(outputText);

fs.writeFileSync("./src/js/dynamicContent", outputText + outputKey);