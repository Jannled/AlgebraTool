var ewevMat = [];

function createMat(rows = 3, cols = 3)
{
	let table = document.getElementById('ewevMat');

	for(let r=0; r<rows; r++)
	{
		ewevMat[r] = [];

		let tr = document.createElement('tr');
		table.appendChild(tr);

		for(let c=0; c<cols; c++)
		{
			let td = document.createElement('td');
			tr.appendChild(td);
			ewevMat[r][c] = document.createElement('input');
			ewevMat[r][c].value = r*cols+c;
			ewevMat[r][c].addEventListener('click', function() {
				ewevMat[r][c].value = '';
			});
			td.appendChild(ewevMat[r][c]);
		}
	}
}

function calculateEwEv()
{
	let mat = [];
	for(let r=0; r<ewevMat.length; r++)
	{
		mat[r] = [];

		for(let c=0; c<ewevMat[0].length; c++)
			mat[r][c] = Number(ewevMat[r][c].value);
	}

	let width = mat[0].length;
	let height = mat.length;

	console.log(math.diag(mat));

	const M = new mlMatrix.Matrix(mat);
	const e = new mlMatrix.EigenvalueDecomposition(M);

	console.log(e);

	/*for(let i=0; i<mat.length; i++)
		mat[i][i] = '(' + mat[i][i] +'-x)';
	
	let sarrus = `${mat[0][0]}*${mat[1][1]}*${mat[2][2]} + ${mat[0][1]}*${mat[1][2]}*${mat[2][0]} + ${mat[0][2]}*${mat[1][0]}*${mat[2][1]} - ${mat[0][2]}*${mat[1][1]}*${mat[2][0]} - ${mat[0][0]}*${mat[1][2]}*${mat[2][1]} - ${mat[0][1]}*${mat[1][0]}*${mat[2][2]}`;
	console.log(sarrus);
	console.log(math.simplify(math.parse(sarrus)).toString());*/
}

function getStuff()
{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {	
			document.getElementById("demo").innerHTML = xhttp.responseText;
		}
	};
	xhttp.open("GET", "/ewev", true);
	xhttp.send();
}
getStuff();

createMat();

/*
for(let c=1; c<mat.length; c++)
{
	for(let r=i; r<mat.length; r++)
	{
		if(mat[r][c-1] == 0)
		{
			if(c<mat.length && mat[r][c] == 0)
				console.error("TODO: Zeilentausch noch nicht implementiert");
		}
		else
			continue;
		
		let fak = 

		for(let i=c; i<mat[0].length; i++)
		{
			
		}
		math.simplify(`*`);
	}
}
*/