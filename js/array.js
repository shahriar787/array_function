
//toString()
var marks = [10, 15, 12, 18, 20, 25];
var marks_string = marks.toString();
document.write(marks_string[2]+"<br/>");



//join()
var marks = [10, 15, 12, 18, 20, 25];
var marks_join = marks.join("*");
document.write(marks_join+"<br/>");

//shift()
var marks = [10, 15, 12, 18, 20, 25];
marks.shift();
document.write(marks+"<br/>");


//unshift()
var marks = [10, 15, 12, 18, 20, 25];
marks.unshift(1000);
document.write(marks+"<br/>");

//pop()
var marks = [10, 15, 12, 18, 20, 25];
marks.pop();
document.write(marks+"<br/>");

//push()
var marks = [10, 15, 12, 18, 20, 25];
marks.push(2000);
document.write(marks+"<br/>");

//delete()
var marks = [10, 15, 12, 18, 20, 25];
delete marks [2];
document.write(marks+"<br/>");

//splice()
var marks = [10, 15, 12, 18, 20, 25];
 marks.splice(2,1,80,90);
document.write(marks+"<br/>");

//concat()
var marks = [10, 15, 12, 18, 20, 25];
var anotherMark = [81, 80, 90, 95];
var new_mark = marks.concat(anotherMark);
document.write(new_mark+"<br/>");


//slice()
var marks = [10, 15, 12, 18, 20, 25];
var sliceMarks = marks.slice(0,3);
document.write(sliceMarks+"<br/>");


//sort()
var alphabet = ["B", "A", "E", "D", "C"];
alphabet.sort();
document.write(alphabet+"<br/>");

//sort()
var marks = [10, 15, 30, 45, 12, 18, 20, 25,1,3];
marks.sort(
	function(a,b){
	return a-b});
document.write(marks+"<br/>");



