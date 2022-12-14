
function finalGrade (examGrade, numOfProjects) {
    let finalGrade
    if(examGrade > 90 || numOfProjects > 10){
      finalGrade = 100
    }else if(examGrade > 75 && numOfProjects >= 5 ){
      finalGrade = 90
    }else if(examGrade > 50 && numOfProjects >= 2){
      finalGrade = 75
    }else{
      finalGrade = 0
    }
    return finalGrade
  }
