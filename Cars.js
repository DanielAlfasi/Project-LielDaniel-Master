const Vehicle = require('./backend/src/models/vehicle')
const  mongoose = require('mongoose')

//DB INIT
mongoose.connect('mongodb://127.0.0.1:27017/Cars-BnB-Porject',{
    useNewUrlParser:true,
    useCreateIndex:true,
    userFindAndModify:false
})
const  db = mongoose.connection
 
db.on('error', console.error.bind(console, 'connection error:'))
 
db.once('open', function() {
    console.log("Connection Successful!")})
//END OF INITIALIZATION

//VARIABLES
const manufacturer=['HYUNDAI','HONDA','TOYOTA','SKODA','AUDI','NISSAN','VOLKSWAGEN']
const descriptions=['Great','Good','Perfect','Nice','New','Beutiful']
const gear=['Auto','Manual']
const rating =[5,4.3,4.4,4.7,3.7,3.9,4.1,4,4.2,5,5,5,4.3,4.2,4.5,4.5,4,4.5]
const color=['Blue','Black','White','Red','Yellow']
const models= ['i10','i20','i30','Ioniq','Civic','Accord','Insight','CR-V','Corolla','RAV-4','Yaris','Auris','Superb','Fabia',
                'Octavia','Kamiq','A3','A1','TT','Q3','Micra','Juke','Altima','Qashqai','Golf','Polo','Caddy','Beetle']
const engineType=['Gas','Hybrid']
const seats=[2,5]
const doors=[2,5]
const numOfBaggage=[2,3,4]
const tf=[true,false]
let car={}
let licensePlate=1
const locations= ['Israel','France','Germany','Netherlands','Italy','Poland','Greece','India','Mexico']
const pricePerDay=[50,50,60,70,60,60,60,80,60,90,60,50,100,60,80,90,120,100,150,150,50,70,70,70,70,70,70,120]
//WE NEED TO ADD PRICE PER DAY AS WELL

//VEHICLES CREATION
manufacturer.forEach((manufacturer) => {
    if(manufacturer==='HYUNDAI')
        for(let i=0; i<4;i++){
            for(let j=0; j<color.length;j++){
                for(let x=0;x<locations.length;x++){
                    let description=descriptions[Math.floor(Math.random() * 5)]
                    let year= Math.floor(Math.random() * (2022 - 2015)) + 2015
                    if(description==='New') year= 2022
                    car={
                        description,
                        manufacturer,
                        owner:'6334295c994c04c1e44dece6',
                        licensePlate: licensePlate++,
                        model:models[i],
                        color:color[j],
                        year,
                        gear:gear[Math.floor(Math.random() * 2)],
                        AC:tf[Math.floor(Math.random() * 2)],
                        blueTooth:tf[Math.floor(Math.random() * 2)],
                        GPS: tf[Math.floor(Math.random() * 2)],
                        rating:rating[Math.floor(Math.random() * rating.length)],
                        engineType: engineType[Math.floor(Math.random() * 2)],
                        seats: seats[Math.floor(Math.random() * 2)],
                        doors: doors[Math.floor(Math.random() * 2)],
                        numOfBaggage: numOfBaggage[Math.floor(Math.random() * 2)],
                        pricePerDay: pricePerDay[i],
                        location:locations[x]
                    }
                    const vehicle= new Vehicle(car)
                    vehicle.save()
                }
            }   
        }
        if(manufacturer==='HONDA')
        for(let i=4; i<8;i++){
            for(let j=0; j<color.length;j++){
                for(let x=0;x<locations.length;x++){
                    let description=descriptions[Math.floor(Math.random() * 5)]
                    let year= Math.floor(Math.random() * (2022 - 2015)) + 2015
                    if(description==='New') year= 2022
                    car={
                        description,
                        manufacturer,
                        owner:'6334295c994c04c1e44dece6',
                        licensePlate: licensePlate++,
                        model:models[i],
                        color:color[j],
                        year,
                        gear:gear[Math.floor(Math.random() * 2)],
                        AC:tf[Math.floor(Math.random() * 2)],
                        blueTooth:tf[Math.floor(Math.random() * 2)],
                        GPS: tf[Math.floor(Math.random() * 2)],
                        rating:rating[Math.floor(Math.random() * rating.length)],
                        engineType: engineType[Math.floor(Math.random() * 2)],
                        seats: seats[Math.floor(Math.random() * 2)],
                        doors: doors[Math.floor(Math.random() * 2)],
                        numOfBaggage: numOfBaggage[Math.floor(Math.random() * 2)],
                        pricePerDay: pricePerDay[i],
                        location:locations[x]
                    }
                    const vehicle= new Vehicle(car)
                    vehicle.save()
                }
            }   
        }
        if(manufacturer==='TOYOTA')
        for(let i=8; i<12;i++){
            for(let j=0; j<color.length;j++){
                for(let x=0;x<locations.length;x++){
                    let description=descriptions[Math.floor(Math.random() * 5)]
                    let year= Math.floor(Math.random() * (2022 - 2015)) + 2015
                    if(description==='New') year= 2022
                    car={
                        description,
                        manufacturer,
                        owner:'6334295c994c04c1e44dece6',
                        licensePlate: licensePlate++,
                        model:models[i],
                        color:color[j],
                        year,
                        gear:gear[Math.floor(Math.random() * 2)],
                        AC:tf[Math.floor(Math.random() * 2)],
                        blueTooth:tf[Math.floor(Math.random() * 2)],
                        GPS: tf[Math.floor(Math.random() * 2)],
                        rating:rating[Math.floor(Math.random() * rating.length)],
                        engineType: engineType[Math.floor(Math.random() * 2)],
                        seats: seats[Math.floor(Math.random() * 2)],
                        doors: doors[Math.floor(Math.random() * 2)],
                        numOfBaggage: numOfBaggage[Math.floor(Math.random() * 2)],
                        pricePerDay: pricePerDay[i],
                        location:locations[x]
                    }
                    const vehicle= new Vehicle(car)
                    vehicle.save()
                }
            }   
        }
        if(manufacturer==='SKODA')
        for(let i=12; i<16;i++){
            for(let j=0; j<color.length;j++){
                for(let x=0;x<locations.length;x++){
                    let description=descriptions[Math.floor(Math.random() * 5)]
                    let year= Math.floor(Math.random() * (2022 - 2015)) + 2015
                    if(description==='New') year= 2022
                    car={
                        description,
                        manufacturer,
                        owner:'6334295c994c04c1e44dece6',
                        licensePlate: licensePlate++,
                        model:models[i],
                        color:color[j],
                        year,
                        gear:gear[Math.floor(Math.random() * 2)],
                        AC:tf[Math.floor(Math.random() * 2)],
                        blueTooth:tf[Math.floor(Math.random() * 2)],
                        GPS: tf[Math.floor(Math.random() * 2)],
                        rating:rating[Math.floor(Math.random() * rating.length)],
                        engineType: engineType[Math.floor(Math.random() * 2)],
                        seats: seats[Math.floor(Math.random() * 2)],
                        doors: doors[Math.floor(Math.random() * 2)],
                        numOfBaggage: numOfBaggage[Math.floor(Math.random() * 2)],
                        pricePerDay: pricePerDay[i],
                        location:locations[x]
                    }
                    const vehicle= new Vehicle(car)
                    vehicle.save()
                }
            }   
        }
        if(manufacturer==='AUDI')
        for(let i=16; i<20;i++){
            for(let j=0; j<color.length;j++){
                for(let x=0;x<locations.length;x++){
                    let description=descriptions[Math.floor(Math.random() * 5)]
                    let year= Math.floor(Math.random() * (2022 - 2015)) + 2015
                    if(description==='New') year= 2022
                    car={
                        description,
                        manufacturer,
                        owner:'6334295c994c04c1e44dece6',
                        licensePlate: licensePlate++,
                        model:models[i],
                        color:color[j],
                        year,
                        gear:gear[Math.floor(Math.random() * 2)],
                        AC:tf[Math.floor(Math.random() * 2)],
                        blueTooth:tf[Math.floor(Math.random() * 2)],
                        GPS: tf[Math.floor(Math.random() * 2)],
                        rating:rating[Math.floor(Math.random() * rating.length)],
                        engineType: engineType[Math.floor(Math.random() * 2)],
                        seats: seats[Math.floor(Math.random() * 2)],
                        doors: doors[Math.floor(Math.random() * 2)],
                        numOfBaggage: numOfBaggage[Math.floor(Math.random() * 2)],
                        pricePerDay: pricePerDay[i],
                        location:locations[x]
                    }
                    const vehicle= new Vehicle(car)
                    vehicle.save()
                }
            }   
        }
        if(manufacturer==='NISSAN')
        for(let i=20; i<24;i++){
            for(let j=0; j<color.length;j++){
                for(let x=0;x<locations.length;x++){
                    let description=descriptions[Math.floor(Math.random() * 5)]
                    let year= Math.floor(Math.random() * (2022 - 2015)) + 2015
                    if(description==='New') year= 2022
                    car={
                        description,
                        manufacturer,
                        owner:'6334295c994c04c1e44dece6',
                        licensePlate: licensePlate++,
                        model:models[i],
                        color:color[j],
                        year,
                        gear:gear[Math.floor(Math.random() * 2)],
                        AC:tf[Math.floor(Math.random() * 2)],
                        blueTooth:tf[Math.floor(Math.random() * 2)],
                        GPS: tf[Math.floor(Math.random() * 2)],
                        rating:rating[Math.floor(Math.random() * rating.length)],
                        engineType: engineType[Math.floor(Math.random() * 2)],
                        seats: seats[Math.floor(Math.random() * 2)],
                        doors: doors[Math.floor(Math.random() * 2)],
                        numOfBaggage: numOfBaggage[Math.floor(Math.random() * 2)],
                        pricePerDay: pricePerDay[i],
                        location:locations[x]
                    }
                    const vehicle= new Vehicle(car)
                    vehicle.save()
                }
            }   
        }
        if(manufacturer==='VOLKSWAGEN')
        for(let i=24; i<28;i++){
            for(let j=0; j<color.length;j++){
                for(let x=0;x<locations.length;x++){
                    let description=descriptions[Math.floor(Math.random() * 5)]
                    let year= Math.floor(Math.random() * (2022 - 2015)) + 2015
                    if(description==='New') year= 2022
                    car={
                        description,
                        manufacturer,
                        owner:'6334295c994c04c1e44dece6',
                        licensePlate: licensePlate++,
                        model:models[i],
                        color:color[j],
                        year,
                        gear:gear[Math.floor(Math.random() * 2)],
                        AC:tf[Math.floor(Math.random() * 2)],
                        blueTooth:tf[Math.floor(Math.random() * 2)],
                        GPS: tf[Math.floor(Math.random() * 2)],
                        rating:rating[Math.floor(Math.random() * rating.length)],
                        engineType: engineType[Math.floor(Math.random() * 2)],
                        seats: seats[Math.floor(Math.random() * 2)],
                        doors: doors[Math.floor(Math.random() * 2)],
                        numOfBaggage: numOfBaggage[Math.floor(Math.random() * 2)],
                        pricePerDay: pricePerDay[i],
                        location:locations[x]
                    }
                    const vehicle= new Vehicle(car)
                    vehicle.save()
                }
            }   
        }
});