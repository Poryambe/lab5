let i,j = 0;
let arr_1 = [];
let min = 100;
let max = 0;
let min_i, max_i = 0;

for (i = 0; i<100; i++){
	arr_1[i] = Math.floor(Math.random() * 101);
	document.write('a[' + (i+1) + '] = ' + arr_1[i] + "; ");
}

for (i = 0; i<=100; i++){
	if (arr_1[i]>max){
		max = arr_1[i];
		max_i = i + 1;
	} else if (arr_1[i]<min){
		min = arr_1[i];
		min_i = i + 1;
	}
}

document.write('<p>Максимальный элемент массива = ' + max + ', имеет индекс [' + max_i + '];</p>');
document.write('<p>Минимальный элемент массива = ' + min + ', имеет индекс [' + min_i + '];</p>');

//_____________________________________________________________________________________________________________________________________________

let arr_2 = [];
let sum_j = 0;

document.write('<table border = "1px">');
for (i = 0; i < 10; i++){
	sum_j = 0;
	arr_2[i] = [];
	document.write('<tr>');
	for (j = 0; j < 10; j++){
		arr_2[i][j] = Math.floor(Math.random() * 100);
		document.write('<td>' + arr_2[i][j] + '</td>');
		sum_j += arr_2[i][j];
	}
	document.write('<td> Сумма рядка = ' + sum_j + '</td>');
	document.write('</tr>');
}
document.write('</table>');

//_____________________________________________________________________________________________________________________________________________

let watJs = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
let watList = [];
let ol = document.getElementById("list");

for(let i = 0; i < watJs.length; i++){
	watList.push("<li>" + watJs[i] + "</li>");
}

ol.innerHTML = watList.join('');