const data={
    "Summary": "Devices",
    "gruppi": {
      "camara letto": [
        {
          "id": "214202181039PM",
          "Tipo": "Luce",
          "Nome_Device": "Appliche",
          "Icona": "shelly4.svg"
        },
        {
          "id": "218202173757PM",
          "Tipo": "Luce",
          "Nome_Device": "Barra Led ",
          "Icona": "sensore.svg"
        },
        {
          "id": "2/14/2021 9:02:03 PM",
          "Tipo": "Tapparella",
          "Nome_Device": "Porta Letto",
          "Icona": "cancello.svg"
        },
        {
          "id": "2/14/2021 9:03:16 PM",
          "Tipo": "Tapparella",
          "Nome_Device": "Finestra Letto",
          "Icona": "shelly4.svg"
        }
      ],
      "garagio": [],
      "giardino": [],
      "corridoio": [
        {
          "id": "214202180835PM",
          "Tipo": "Luce",
          "Nome_Device": "Corridoio",
          "Icona": "tesata"
        }
      ],
      "cucina": [
        {
          "id": "214202144317PM",
          "Tipo": "Luce",
          "Nome_Device": "Cucina",
          "Icona": "1"
        },
        {
          "id": "2/14/2021 8:48:47 PM",
          "Tipo": "Tapparella",
          "Nome_Device": "Cucina",
          "Icona": "tapparella"
        }
      ],
      "letto 2": [
        {
          "id": "214202181414PM",
          "Tipo": "Luce",
          "Nome_Device": "Letto",
          "Icona": "1"
        }
      ],
      "salone": [
        {
          "id": "214202143832PM",
          "Tipo": "Luce",
          "Nome_Device": "Sala",
          "Icona": "1"
        },
        {
          "id": "214202144029PM",
          "Tipo": "Luce",
          "Nome_Device": "Divano",
          "Icona": "1"
        },
        {
          "id": "214202173304PM",
          "Tipo": "Luce",
          "Nome_Device": "Cappa ",
          "Icona": "1"
        },
        {
          "id": "2/14/2021 8:49:27 PM",
          "Tipo": "Tapparella",
          "Nome_Device": "Salone",
          "Icona": "tapparella"
        },
        {
          "id": "12122021192202",
          "Tipo": "Generic",
          "Nome_Device": "Televisore ",
          "Icona": "tv"
        },
        {
          "id": "14022021163549",
          "Tipo": "Posizione",
          "Nome_Device": "divano destro",
          "Icona": "1"
        },
        {
          "id": "16052021210518",
          "Tipo": "Posizione",
          "Nome_Device": "divano sinistra",
          "Icona": "1"
        }
      ],
      "ingresso": [
        {
          "id": "214202143727PM",
          "Tipo": "Luce",
          "Nome_Device": "Ingresso",
          "Icona": "1"
        }
      ],
      "bagno": [
        {
          "id": "2/14/2021 8:57:01 PM",
          "Tipo": "Tapparella",
          "Nome_Device": "Bagno",
          "Icona": "tapparella"
        }
      ]
    },
    "Gruppi_Stanze": [
      "camara letto",
      "garagio",
      "giardino",
      "corridoio",
      "cucina",
      "letto 2",
      "salone",
      "ingresso",
      "bagno"
    ]
  }

const httpReq=new XMLHttpRequest();

function my_post(){

    
    httpReq.open("POST", "http://127.0.0.1:3000/database" )
    httpReq.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    console.log("post  ",JSON.stringify(data))
    httpReq.send(JSON.stringify(data))

}

function my_get(){

    httpReq.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const datas=JSON.parse(httpReq.responseText)
            console.log("get  ",datas)
        }
      };

    
    httpReq.open("GET", "http://127.0.0.1:3000/database",true )
    //httpReq.withCredentials = true;
    
    httpReq.send()

    

    //location.assign("http://127.0.0.1:3000/database")

}
