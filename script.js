const MyObject = {name: "Yasmina", Age: 14, City: "Tashkent"};

for (let key in MyObject) {
  if (key === 'name' || key === 'Age' || key === 'City') {
    console.log(`${key}: ${MyObject[key]}`);
  }
}

