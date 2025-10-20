const districtSelect = document.getElementById("district");
const assemblyNameSelect = document.getElementById("assembly-name");
const assemblyNoDisplay = document.getElementById("assembly-no");

// District-wise Assembly Constituencies Map
const assemblyData = {
  alipurduar: {
    "Kumargram": "10",
    "Kalchini": "11",
    "Alipurduars": "12",
    "Falakata": "13",
    "Madarihat": "14"
  },
  bankura: {
    "Taldangra": "251",
    "Bankura": "252",
    "Barjora": "253",
    "Onda": "254",
    "Bishnupur": "255",
    "Kotalpur": "256",
    "Indas": "257",
    "Sonamukhi": "258",
    "Patrasayer": "259",
    "Ranibandh": "249",
    "Saltora": "247",
    "Chhatna": "248"
  },
  birbhum: {
    "Rampurhat": "291",
    "Suri": "285",
    "Sainthia": "289",
    "Mayureswar": "290",
    "Labhpur": "288",
    "Bolpur": "286",
    "Nanoor": "287",
    "Hansan": "292",
    "Murarai": "294",
    "Dubrajpur": "284"
  },
  coochbehar: {
    "Mekliganj": "1",
    "Mathabhanga": "2",
    "Cooch Behar Uttar": "3",
    "Cooch Behar Dakshin": "4",
    "Sitalkuchi": "5",
    "Sitai": "6",
    "Dinhata": "7",
    "Natabari": "8",
    "Tufanganj": "9"
  },
  dakshin_dinajpur: {
    "Kushmandi": "37",
    "Kumarganj": "38",
    "Balurghat": "39",
    "Tapan": "40",
    "Gangarampur": "41",
    "Harirampur": "42"
  },
  darjeeling: {
    "Matigara-Naxalbari": "25",
    "Siliguri": "26",
    "Phansidewa": "27",
    "Darjeeling": "23",
    "Kurseong": "24"
  },
  hooghly: {
    "Dhanekhali": "197",
    "Chinsurah": "190",
    "Balagarh": "191",
    "Pandua": "192",
    "Saptagram": "193",
    "Jangipara": "195",
    "Haripal": "196",
    "Tarakeswar": "198",
    "Arambag": "200",
    "Goghat": "201",
    "Khanakul": "202",
    "Chandannagar": "189",
    "Chunchura": "190"
  },
  howrah: {
    "Bally": "169",
    "Domjur": "184",
    "Sankrail": "174",
    "Howrah Uttar": "170",
    "Howrah Madhya": "171",
    "Howrah Dakshin": "173",
    "Shibpur": "172",
    "Uluberia Uttar": "177",
    "Uluberia Dakshin": "178",
    "Shyampur": "179",
    "Bagnan": "180",
    "Amta": "181",
    "Udaynarayanpur": "182",
    "Jagatballavpur": "183",
    "Panchla": "175"
  },
  jalpaiguri: {
    "Dhupguri": "15",
    "Maynaguri": "16",
    "Jalpaiguri": "17",
    "Rajganj": "18",
    "Dabgram-Fulbari": "19",
    "Mal": "20",
    "Nagrakata": "21"
  },
  jhargram: {
    "Jhargram": "222",
    "Gopiballavpur": "221",
    "Nayagram": "220",
    "Binpur": "237",
    "Kharagpur": "228"
  },
  kalimpong: {
    "Kalimpong": "22"
  },
  kolkata: {
    "Ballygunge": "161",
    "Chowrangee": "162",
    "Entally": "163",
    "Maniktola": "167",
    "Shyampukur": "166",
    "Jorasanko": "165",
    "Behala Purba": "153",
    "Behala Paschim": "154",
    "Kasba": "149",
    "Tollyganj": "152",
    "Kolkata Port": "158",
    "Bhabanipur": "159",
    "Rashbehari": "160",
    "Jadavpur": "150"
  },
  malda: {
    "Chanchal": "45",
    "Harischandrapur": "46",
    "Malatipur": "47",
    "Englishbazar": "51",
    "Gazole": "44",
    "Habibpur": "43",
    "Manikchak": "49",
    "Sujapur": "53",
    "Ratua": "48",
    "Baisnabnagar": "54",
    "Mothabari": "52"
  },
  murshidabad: {
    "Farakka": "55",
    "Samserganj": "56",
    "Suti": "57",
    "Jangipur": "58",
    "RaghunathGanj": "59",
    "Sagardighi": "60",
    "Nabagram": "65",
    "Khargram": "66",
    "Burwan": "67",
    "Kandi": "68",
    "Murshidabad": "64",
    "Hariharpara": "73",
    "Naoda": "74",
    "Domkal": "75",
    "Jalangi": "76",
    "Karimpur": "77"
  },
  nadia: {
    "Tehatta": "78",
    "Palashipara": "79",
    "Kaliganj": "80",
    "Nakashipara": "81",
    "Chapra": "82",
    "Krishnanagar Uttar": "83",
    "Krishnanagar Dakshin": "85",
    "Nabadwip": "84",
    "Santipur": "86",
    "Ranaghat Uttar Paschim": "87",
    "Ranaghat Uttar Purba": "89",
    "Ranaghat Dakshin": "90",
    "Chakdaha": "91",
    "Haringhata": "93"
  },
  north_24_parganas: {
    "Barasat": "119",
    "Deganga": "120",
    "Basirhat Uttar": "125",
    "Basirhat Dakshin": "124",
    "Baduria": "99",
    "Haroa": "121",
    "Minakhan": "122",
    "Sandeshkhali": "123",
    "Hingalganj": "126",
    "Rajarhat Gopalpur": "117",
    "Rajarhat New Town": "115",
    "Bidhannagar": "116",
    "Dum Dum": "114",
    "Khardaha": "109",
    "Panihati": "111",
    "Kamarhati": "112",
    "Baranagar": "113",
    "Ashoknagar": "101",
    "Habra": "100",
    "Bijpur": "103",
    "Naihati": "104",
    "Bhatpara": "105",
    "Jagatdal": "106",
    "Noapara": "107",
    "Barrackpur": "108",
    "Madhyamgram": "118"
  },
  paschim_bardhaman: {
    "Pandabeswar": "275",
    "Durgapur Purba": "276",
    "Durgapur Paschim": "277",
    "Raniganj": "278",
    "Jamuria": "279",
    "Asansol Dakshin": "280",
    "Asansol Uttar": "281",
    "Kulti": "282",
    "Barabani": "283"
  },
  paschim_medinipur: {
    "Dantan": "219",
    "Keshpur": "235",
    "Garbeta": "233",
    "Salboni": "234",
    "Medinipur": "236",
    "Kharagpur Sadar": "224",
    "Debra": "229",
    "Pingla": "227",
    "Sabang": "226",
    "Daspur": "230",
    "Ghatal": "231",
    "Chandrakona": "232",
    "Narayangarh": "225"
  },
  purba_bardhaman: {
    "Memari": "265",
    "Bardhaman Dakshin": "260",
    "Bardhaman Uttar": "266",
    "Raina": "261",
    "Jamalpur": "262",
    "Kalna": "264",
    "Purbasthali Dakshin": "268",
    "Purbasthali Uttar": "269",
    "Katwa": "270",
    "Ketugram": "271",
    "Mongalkote": "272",
    "Ausgram": "273"
  },
  purba_medinipur: {
    "Chandipur": "211",
    "Patashpur": "212",
    "Tamluk": "203",
    "Panskura Purba": "204",
    "Panskura Paschim": "205",
    "Moyna": "206",
    "Nandakumar": "207",
    "Haldia": "209",
    "Nandigram": "210",
    "Bhagabanpur": "214",
    "Kanthi Uttar": "213",
    "Kanthi Dakshin": "216",
    "Egra": "218",
    "Ramnagar": "217",
    "Khejuri": "215"
  },
  purulia: {
    "Bandwan": "238",
    "Balarampur": "239",
    "Baghmundi": "240",
    "Joypur": "241",
    "Purulia": "242",
    "Manbazar": "243",
    "Kashipur": "244",
    "Para": "245",
    "Raghunathpur": "246"
  },
  south_24_parganas: {
    "Gosaba": "127",
    "Basanti": "128",
    "Kultali": "129",
    "Magrahat Purba": "141",
    "Magrahat Paschim": "142",
    "Mandirbazar": "135",
    "Joynagar": "136",
    "Canning Purba": "139",
    "Canning Paschim": "138",
    "Bishnupur": "146",
    "Baruipur Purba": "137",
    "Baruipur Paschim": "140",
    "Bhangar": "148",
    "Falta": "144",
    "Diamond Harbour": "143",
    "Satgachhia": "145",
    "Budgebudge": "156",
    "Metiaburuz": "157"
  },
  uttar_dinajpur: {
    "Chopra": "28",
    "Islampur": "29",
    "Goalpokhar": "30",
    "Chakulia": "31",
    "Karandighi": "32",
    "Hemtabad": "33",
    "Kaliaganj": "34",
    "Raiganj": "35",
    "Itahar": "36"
  }
};

// Update Assembly options on District change
districtSelect.addEventListener("change", () => {
  const selectedDistrict = districtSelect.value;
  const options = assemblyData[selectedDistrict] || {};

  assemblyNameSelect.innerHTML = `<option value="">Select Assembly</option>`;

  Object.keys(options).forEach(name => {
    const option = document.createElement("option");
    option.value = name;
    option.textContent = name;
    assemblyNameSelect.appendChild(option);
  });

  assemblyNoDisplay.textContent = "—"; // Reset display
});

// Update Assembly No. on selection
assemblyNameSelect.addEventListener("change", () => {
  const district = districtSelect.value;
  const name = assemblyNameSelect.value;
  const number = assemblyData[district]?.[name] || "—";

  assemblyNoDisplay.textContent = number;
});
