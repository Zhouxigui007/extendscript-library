/** * @class File *//** * Function to check if an eps file is a raster file * @return {Boolean} true if the file is a raster eps file created with Photoshop, false if it is a vector eps file */File.prototype.is_raster_eps = function () {    this.open('r');    var str = this.read();    this.close();    var result = str.match('Adobe Photoshop');    if (result) {        return true;    }    else {        return false;    }}/** * Function to read the content of a File * @return {string} */File.prototype.read = function () {    var str = '';    this.encoding = 'UTF8';    this.open('r');    while (!this.eof) {        str += this.readln() + '\n';    }    this.close();    return str;}/** * Function to write into a file * @param {*} content */File.prototype.write = function (content) {    var rc;    this.encoding = 'UTF8';    rc = this.open('w', 'TEXT', '????');    if (!rc) {        throw {            name: 'Error',            message: 'the file cannot be read',            fileName: $.fileName,            line: $.line        };    }    this.lineFeed = 'unix';    rc = this.writeln(content);    rc = this.close();};/** * Function to write into a file * @param {*} content */File.prototype.append = function (line) {    this.encoding = 'UTF8';    this.lineFeed = 'unix';    this.open('a', 'TEXT', '????');    this.writeln(line);    this.close();};/** * Function to get the extension of a file in lowerCase * @return {String} extension the file extension or undefined if the file do no have an extension */File.prototype.extension = function () {    var path, extension, index;    path = this.fsName;    index = path.lastIndexOf('.');    if (index !== -1) {        extension = path.substr(index, path.length - index).toLowerCase();    }    return extension;}/** * Function to get the name without the extension * @return {string} name the name without extension or undefined it the file do not have an extension */File.prototype.name_without_extension = function () {    var name_without_extension, name, index;    name = this.name;    index = name.lastIndexOf(".");    if (index !== -1) {        name_without_extension = name.substr(0, index);    }    return name_without_extension;}