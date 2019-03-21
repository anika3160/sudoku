module.exports = function solveSudoku(matrix) {
    // your solution
    console.log(' original matrix');
    console.log(matrix);

    const postulat = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let varRow = [ [], [], [], [], [], [], [], [],[] ];
    let varColumn = [ [], [], [], [], [], [], [], [],[] ];
    let varKvadrat = [ [], [], [], [], [], [], [], [],[] ];
    let str1 = [];
    let solved = [ [], [], [], [], [], [], [], [], [] ];
    let acc = [ [], [], [], [], [], [], [], [], [] ];
    function getMatrixWZR(matrix) {
        let countZero = 0;
        let str = [];
        let counter = 0;
        for (let i = 0; i < 9; i++) {
            countZero = 0;
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] === 0) {
                    countZero++;
                }
                str[j] = matrix[i][j];
            }
//		console.log(i + 'row: ' + str);
            str.sort();
//		console.log('count zero in row: ' + countZero);
//		console.log(str);
            counter = 0;
            str1 = [0];
            for (let q = countZero; q < 9; q++) {
                str1[counter] = str[q];
                counter++;
            }
//		console.log(str1);
            let s = [0];
            let w = 0;
            let c = 0;
            //поиск значений
            for (let q = 0; q <= str1.length; q++) {
                while (w < 9) {
                    if (str1[q] === postulat[w]) {
                        w++;
                        break;
                    } else {
                        s[c] = postulat[w];
                        c++;
                    }
                    w++;
                }
            }
            for (let q = 0; q < s.length; q++) {
                varRow[i][q] = s[q];
            }
//		console.log(s);

        }
//	console.log('Таблица строк: ');
//	console.log(varRow);
        return varRow;
    }
    function getMatrixWZC(matrix) {
        //транспонируем матрицу
        let arr = [[], [], [], [], [], [], [], [], []];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                arr[i][j] = matrix[j][i];
            }
        }
//	console.log('Транспонированная матрица: ');
//	console.log(arr);

        //формируем таблицу столбцов

        let str = [];
        let str1 = [];
        let countZero = 0;
        let counter = 0;
        for (let i = 0; i < 9; i++) {
            countZero = 0;
            for (let j = 0; j < 9; j++) {
                if (arr[i][j] === 0) {
                    countZero++;
                }
                str[j] = arr[i][j];
            }
//		console.log(i + 'row: ' + str);
            str.sort();
//		console.log('count zero in row: ' + countZero);
//		console.log(str);
            counter = 0;
            str1 = [0];
            for (let q = countZero; q < 9; q++) {
                str1[counter] = str[q];
                counter++;
            }
//		console.log(str1);
            let s = [0];
            let w = 0;
            let c = 0;
            for (let q = 0; q <= str1.length; q++) {
                while (w < 9) {
                    if (str1[q] === postulat[w]) {
                        w++;
                        break;
                    } else {
                        s[c] = postulat[w];
                        c++;
                    }
                    w++;
                }
            }
            for (let q = 0; q < s.length; q++) {
                varColumn[i][q] = s[q];
            }
//		console.log(s);

        }
//	console.log('Таблица столбцов: ');
//	console.log(varColumn);
        return varColumn;
    }

    function getMatrixWZKv(matrix) {
//формируем матрицу квадратов
        let arr = [[0], [0], [0], [0], [0], [0], [0], [0], [0]];
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if ((i === 0) || (i === 3) || (i === 6)) {
                    if (j < 3) {
                        arr[i][j] = matrix[i][j];
                    } else if (j < 6) {
                        arr[i][j] = matrix[i + 1][j - 3];
                    } else {
                        arr[i][j] = matrix[i + 2][j - 6];
                    }
                } else if ((i === 1) || (i === 4) || (i === 7)) {
                    if (j < 3) {
                        arr[i][j] = matrix[i - 1][j + 3];
                    } else if (j < 6) {
                        arr[i][j] = matrix[i][j];
                    } else {
                        arr[i][j] = matrix[i + 1][j - 3];
                    }
                } else {
                    if (j < 3) {
                        arr[i][j] = matrix[i - 2][j + 6];
                    } else if (j < 6) {
                        arr[i][j] = matrix[i - 1][j + 3];
                    } else {
                        arr[i][j] = matrix[i][j];
                    }
                }
            }
        }
//	console.log('Матрица квадратов: ');
//	console.log(arr);

        let str = [0];
        let str1 = [0];
        let countZero = 0;
        let counter = 0;
        for (let i = 0; i < 9; i++) {
            countZero = 0;
            for (let j = 0; j < 9; j++) {
                if (arr[i][j] === 0) {
                    countZero++;
                }
                str[j] = arr[i][j];
            }
//		console.log(i + 'row: ' + str);
            str.sort();
//		console.log('count zero in row: ' + countZero);
//		console.log(str);
            counter = 0;
            str1 = [0];
            for (let q = countZero; q < 9; q++) {
                str1[counter] = str[q];
                counter++;
            }
//		console.log(str1);
            let s = [0];
            let w = 0;
            let c = 0;
            for (let q = 0; q <= str1.length; q++) {
                while (w < 9) {
                    if (str1[q] === postulat[w]) {
                        w++;
                        break;
                    } else {
                        s[c] = postulat[w];
                        c++;
                    }
                    w++;
                }
            }
            for (let q = 0; q < s.length; q++) {
                varKvadrat[i][q] = s[q];
            }
//		console.log(s);
        }
//	console.log('Таблица квадратов: ');
//	console.log(varKvadrat);
        return varKvadrat;
    }

    function searchZero(matrix) {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] === 0) {
                    return true;
                }
            }
        }
        return false;
    }

    function searchSolve (matrix, varRow, varColumn, varKvadrat) {
        let zIR = [0];
        let zIC = [0];
        let zIKv = [0];
        let str2 = [0];
        let str = [0];
        let cc = 0;

        for (let i = 0; i < 9; i++) {
            zIR = [0];
            zIC = [0];
            zIKv = [0];
            str = [0];
            str2 = [0];
            cc = 0;
            for (let j = 0; j < 9; j++) {
                if (matrix[i][j] === 0) {
                    zIR = varRow[i];
                    zIC = varColumn[j];
                    if (i < 3) {
                        if (j < 3) {//1
                            zIKv = varKvadrat[0];
                        } else if (j < 6) {//2
                            zIKv = varKvadrat[1];
                        } else { //3
                            zIKv = varKvadrat[2];
                        }
                    } else if (i < 6) {
                        if (j < 3) {//4
                            zIKv = varKvadrat[3];
                        } else if (j < 6) {
                            zIKv = varKvadrat[4];
                        } else {
                            zIKv = varKvadrat[5];
                        }
                    } else {
                        if (j < 3) {
                            zIKv = varKvadrat[6];
                        } else if (j < 6) {
                            zIKv = varKvadrat[7];
                        } else {
                            zIKv = varKvadrat[8];
                        }
                    }

//				console.log('Curent positin (' + i + ';' + j + ')');
//				console.log(zIR);
//				console.log(zIC);
//				console.log(zIKv);
//				console.log(' ');
                    //поиск доп значений
                    str = [0];
                    str2 = [0];
                    cc = 0;
                    for (let q = 0; q < zIR.length; q++) {
                        for (let p = 0; p < zIC.length; p++) {
                            if (zIR[q] === zIC[p]) {
                                str[cc] = zIC[p];
                                cc++;
                                break;
                            }
                        }
                        cc = 0;
                        for (let q = 0; q < str.length; q++) {
                            for (let p = 0; p < zIKv.length; p++) {
                                if (str[q] === zIKv[p]) {
                                    str2[cc] = zIKv[p];
                                    cc++;
                                    break;
                                }
                            }
                        }
                    }
//				console.log('zIC+zIR+zIKv ' + str2);
                    //       console.log(' ');
                    //заполнение
                    if (str2.length === 1) {
                        matrix[i][j] = str2[0];
                        //  console.log('matrix');
                        // console.log(matrix);
                        // console.log(' ');
                    }
                }

            }
        }

        return matrix;
    }
    let k=0;
    while (k<100) {
        solved=matrix;
        varRow = [[], [], [], [], [], [], [], [], []];
        varColumn = [[], [], [], [], [], [], [], [], []];
        varKvadrat = [[], [], [], [], [], [], [], [], []];
        //формируем таблицу строк
        varRow = getMatrixWZR(matrix);
        //формируем таблицу столбцов
        varColumn = getMatrixWZC(matrix);
        //формируем матрицу квадратов
        varKvadrat = getMatrixWZKv(matrix);
        //алгоритм поиска значений
        matrix=searchSolve(matrix, varRow, varColumn, varKvadrat);
        k++;
    }

    console.log('solved matrix');
    console.log(matrix);
    return matrix;
}