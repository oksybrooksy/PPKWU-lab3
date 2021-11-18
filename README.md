# PPKWU-zad3
## API DOCUMENTATION
Created by Julia Trajdos

### Controller: 
`GET /format?format=&text=` 
## Arguments
format: txt, json, xml and csv.

text: string to convert
## Returned values
Returned value depends on choosen format: txt, json, xml or csv. 


## Examples:
Input data: http://localhost:3001/format?format=csv&text=AlAMaKot122--

Output data: "message","message2","message3","message4"
"Capital letters: 4","Lowercase letters: 4","Digits: 3","Special characters: 2"


Input data: http://localhost:3001/format?format=json&text=AlAMaKot122--

Output data: 
{

    "message": "Capital letters: 4",
    
    "message2": "Lowercase letters: 4",
    
    "message3": "Digits: 3",
    
    "message4": "Special characters: 2"
    
}


Input data: http://localhost:3001/format?format=xml&text=AlAMaKot122--

Output data: Capital letters: 4 

 Lowercase letters: 4 
 
 Digits: 3 
 
 Special characters: 2
 
