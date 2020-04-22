const exo4 = (data) => {
  let bat = 0;
  let position = 0;
  for (let i = 0; i < data.length; i++) {
      console.log(i + " i")
      console.log(position + " position")


    if ((data[i] >= data[position] && i != position)) {
      console.log('///////////')
      console.log(data[i] + " boucle n " + i +  " " + data[position] + " position " + position)
      i = position;
      position++;
    }

    // quand on atteint la fin du tableau et que ça continue de boucler
    if (i === data.length - 1) {
      console.log(i + " @@@@@@ " + data[i] + "@@@@@@@@"  + (data[position]) + " " +  position)
      bat += 1;
      i = position;
      position++;
    }  
  }
  return bat
};



console.log(exo4([21, 18, 17, 16, 15,  15, 18, 15, 15, 18]))