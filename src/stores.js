const stores = [{
   type: 'Bunnings',
   suburb: 'Belconnen',
   state: 'ACT',
   lat: -35.245049,
   lng: 149.064474,
   address: '15 Lathlain Street, Belconnen ACT 2617'
 },
 {
   type: 'Bunnings',
   suburb: 'Canberra Airport ',
   state: 'ACT',
   lat: -35.292392,
   lng: 149.190749,
   address: '971 Majura Road Majura Park ACT 2609'
 },
 {
   type: 'Bunnings',
   suburb: 'Fyshwick',
   state: 'ACT',
   lat: -35.329257,
   lng: 149.178268,
   address: 'Newcastle Street Cnr Collie Street, Fyshwick ACT 2609'
 },
 {
   type: 'Bunnings',
   suburb: 'Gungahlin',
   state: 'ACT',
   lat: -35.187546,
   lng: 149.134957,
   address: '10 Gribble Street, Gungahlin ACT 2912'
 },
 {
   type: 'Bunnings',
   suburb: 'Tuggeranong',
   state: 'ACT',
   lat: -35.411616,
   lng: 149.066971,
   address: 'Anketell Street Cnr Oakden Street, Tuggeranong ACT 2900'
 },
 {
   type: 'Bunnings',
   suburb: 'Albury',
   state: 'NSW',
   lat: -36.074771,
   lng: 146.914504,
   address: 'Young Street Cnr Wilson Street, Albury NSW 2640'
 },
 {
   type: 'Bunnings',
   suburb: 'Alexandria',
   state: 'NSW',
   lat: -33.909808,
   lng: 151.192961,
   address: '8-40 Euston Road Cnr McEvoy St, Alexandria NSW 2015'
 },
 {
   type: 'Bunnings',
   suburb: 'Armidale',
   state: 'NSW',
   lat: -30.51268,
   lng: 151.663934,
   address: 'Barney Street Cnr Canambe Street, Armidale NSW 2350'
 },
 {
   type: 'Bunnings',
   suburb: 'Artarmon',
   state: 'NSW',
   lat: -33.816463,
   lng: 151.188131,
   address: '71 Reserve Road, Artarmon NSW 2064'
 },
 {
   type: 'Bunnings',
   suburb: 'Ashfield',
   state: 'NSW',
   lat: -33.888031,
   lng: 151.124724,
   address: 'Parramatta Road Cnr Frederick St, Ashfield NSW 2131'
 },
 {
   type: 'Bunnings',
   suburb: 'Balgowlah',
   state: 'NSW',
   lat: -33.794767,
   lng: 151.260717,
   address: 'Balgowlah Road Cnr Condamine St, Balgowlah NSW 2093'
 },
 {
   type: 'Bunnings',
   suburb: 'Ballina',
   state: 'NSW',
   lat: -28.854769,
   lng: 153.532296,
   address: 'River Street Cnr Horizon Drv, Ballina NSW 2478'
 },
 {
   type: 'Bunnings',
   suburb: 'Bankstown Airport',
   state: 'NSW',
   lat: -33.919862,
   lng: 151.031965,
   address: '347-359 Milperra Road, Bankstown Airport NSW 2200'
 },
 {
   type: 'Bunnings',
   suburb: 'Batemans Bay',
   state: 'NSW',
   lat: -35.71897,
   lng: 150.174904,
   address: '32-34 Princes Highway, Batemans Bay NSW 2536'
 },
 {
   type: 'Bunnings',
   suburb: 'Bathurst',
   state: 'NSW',
   lat: -33.417961,
   lng: 149.576458,
   address: '21 Great Western Highway Cnr Stockland Drive, Bathurst NSW 2795'
 },
 {
   type: 'Bunnings',
   suburb: 'Bellambi',
   state: 'NSW',
   lat: -34.368692,
   lng: 150.927688,
   address: 'Watts Lane Cnr Bellambi Lane, Bellambi NSW 2518'
 },
 {
   type: 'Bunnings',
   suburb: 'Belrose ',
   state: 'NSW',
   lat: -33.733897,
   lng: 151.206086,
   address: 'Austlink Corp Park Niangala Close Belrose NSW 2085'
 },
 {
   type: 'Bunnings',
   suburb: 'Bennetts Green  NEW',
   state: 'NSW',
   lat: -29.629852,
   lng: 153.030239,
   address: '20 Pacific Hwy Bennetts Green NSW 2290'
 },
 {
   type: 'Bunnings',
   suburb: 'Blacktown',
   state: 'NSW',
   lat: -33.775679,
   lng: 150.901784,
   address: 'Great Western Highway Cnr Reservoir Rd, Blacktown NSW 2148'
 },
 {
   type: 'Bunnings',
   suburb: 'Bonnyrigg',
   state: 'NSW',
   lat: -33.889652,
   lng: 150.885718,
   address: 'Lot 436 Bonnyrigg Avenue, Bonnyrigg NSW 2177'
 },
 {
   type: 'Bunnings',
   suburb: 'Byron Bay',
   state: 'NSW',
   lat: -28.637168,
   lng: 153.582333,
   address: '2 Bayshore Drive, Byron Bay NSW 2481'
 },
 {
   type: 'Bunnings',
   suburb: 'Campbelltown',
   state: 'NSW',
   lat: -34.072724,
   lng: 150.803751,
   address: 'Kellicar Road, Campbelltown NSW 2560'
 },
 {
   type: 'Bunnings',
   suburb: 'Caringbah',
   state: 'NSW',
   lat: -34.036615,
   lng: 151.12448,
   address: 'Koonya Circuit, Caringbah NSW 1495'
 },
 {
   type: 'Bunnings',
   suburb: 'Carlingford',
   state: 'NSW',
   lat: -33.778987,
   lng: 151.051653,
   address: '295 Pennant Hills Road, Carlingford NSW 2118'
 },
 {
   type: 'Bunnings',
   suburb: 'Castle Hill',
   state: 'NSW',
   lat: -33.728302,
   lng: 150.977229,
   address: '14 Victoria Avenue, Castle Hill NSW 2154'
 },
 {
   type: 'Bunnings',
   suburb: 'Cessnock',
   state: 'NSW',
   lat: -32.835913,
   lng: 151.356114,
   address: '249-255 Vincent Street, Cessnock NSW 2325'
 },
 {
   type: 'Bunnings',
   suburb: 'Chatswood',
   state: 'NSW',
   lat: -33.797831,
   lng: 151.177398,
   address: 'Gibbes Street Cnr Smith St, Chatswood NSW 2057'
 },
 {
   type: 'Bunnings',
   suburb: 'Coffs Harbour',
   state: 'NSW',
   lat: -30.290583,
   lng: 153.114278,
   address: 'Pacific Hwy Drive Cnr Cook Drive, Coffs Harbour NSW 2450'
 },
 {
   type: 'Bunnings',
   suburb: 'Cowra',
   state: 'NSW',
   lat: -33.82695,
   lng: 148.682994,
   address: '22 Redfern Street, Cowra NSW 2794'
 },
 {
   type: 'Bunnings',
   suburb: 'Crossroads ',
   state: 'NSW',
   lat: -33.953036,
   lng: 150.901347,
   address: 'Cnr Campbelltown Rd & Camden Valley Wy Casula NSW 2170'
 },
 {
   type: 'Bunnings',
   suburb: 'Dubbo',
   state: 'NSW',
   lat: -32.250776,
   lng: 148.615532,
   address: 'Mitchell Highway Cnr Sheraton Rd, Dubbo NSW 2830'
 },
 {
   type: 'Bunnings',
   suburb: 'Dural',
   state: 'NSW',
   lat: -33.702643,
   lng: 151.02865,
   address: '248-252 New Line Road, Dural NSW 2158'
 },
 {
   type: 'Bunnings',
   suburb: 'Eastgardens ',
   state: 'NSW',
   lat: -33.945735,
   lng: 151.224456,
   address: '140-148 Denison St Eastgardens NSW 2036'
 },
 {
   type: 'Bunnings',
   suburb: 'Erina Fair',
   state: 'NSW',
   lat: -33.434082,
   lng: 151.390033,
   address: '147 The Entrance Road, Erina Fair NSW 2250'
 },
 {
   type: 'Bunnings',
   suburb: 'Forbes',
   state: 'NSW',
   lat: -33.450573,
   lng: 147.855719,
   address: 'Newell Highway Corner Lamb Street, Forbes NSW 2871'
 },
 {
   type: 'Bunnings',
   suburb: 'Forster',
   state: 'NSW',
   lat: -32.220408,
   lng: 152.547653,
   address: 'Lot 21-22 Breese Road, Forster NSW 2428'
 },
 {
   type: 'Bunnings',
   suburb: 'Gladesville  NEW',
   state: 'NSW',
   lat: -33.826925,
   lng: 151.125167,
   address: 'Cnr Victoria Rd and Frank St Gladesville NSW 2111'
 },
 {
   type: 'Bunnings',
   suburb: 'Glendale ',
   state: 'NSW',
   lat: -32.949178,
   lng: 151.627817,
   address: 'Corner TC Frith Ave and Munibung Road Boolaroo NSW 2284'
 },
 {
   type: 'Bunnings',
   suburb: 'Gordon',
   state: 'NSW',
   lat: -33.755493,
   lng: 151.153149,
   address: '751 Pacific Highway, Gordon NSW 2072'
 },
 {
   type: 'Bunnings',
   suburb: 'Goulburn',
   state: 'NSW',
   lat: -34.747283,
   lng: 149.726961,
   address: 'Hume Street Cnr Ducks Lane, Goulburn NSW 2580'
 },
 {
   type: 'Bunnings',
   suburb: 'Grafton',
   state: 'NSW',
   lat: -29.683335,
   lng: 152.935695,
   address: 'Iolanthe Street Cnr Pacific Hwy, Grafton NSW 2460'
 },
 {
   type: 'Bunnings',
   suburb: 'Greenacre',
   state: 'NSW',
   lat: -33.907964,
   lng: 151.06424,
   address: '57-67 Roberts Road, Greenacre NSW 2190'
 },
 {
   type: 'Bunnings',
   suburb: 'Gregory Hills ',
   state: 'NSW',
   lat: -34.036524,
   lng: 150.796003,
   address: '2 Rodeo Rd Gregory Hills NSW 2557'
 },
 {
   type: 'Bunnings',
   suburb: 'Griffith',
   state: 'NSW',
   lat: -34.284887,
   lng: 146.022625,
   address: 'Kidman Way, Griffith NSW 2680'
 },
 {
   type: 'Bunnings',
   suburb: 'Heatherbrae ',
   state: 'NSW',
   lat: -32.792888,
   lng: 151.725662,
   address: '8 Griffin St Heatherbrae NSW 2324'
 },
 {
   type: 'Bunnings',
   suburb: 'Hoxton Park ',
   state: 'NSW',
   lat: -33.931644,
   lng: 150.852958,
   address: 'Corner Cowpasture Road & Airfield Drive Hoxton Park NSW 2171'
 },
 {
   type: 'Bunnings',
   suburb: 'Inverell',
   state: 'NSW',
   lat: -29.771429,
   lng: 151.117053,
   address: '79-81 Oliver Street, Inverell NSW 2360'
 },
 {
   type: 'Bunnings',
   suburb: 'Katoomba ',
   state: 'NSW',
   lat: -33.714793,
   lng: 150.30671,
   address: 'Cnr Wilson St & Megalong St Katoomba NSW 2780'
 },
 {
   type: 'Bunnings',
   suburb: 'Kembla Grange  NEW',
   state: 'NSW',
   lat: -34.465073,
   lng: 150.784416,
   address: '640 Northcliffe Drive Kembla Grange NSW 2526'
 },
 {
   type: 'Bunnings',
   suburb: 'Kempsey North',
   state: 'NSW',
   lat: -31.07322,
   lng: 152.845055,
   address: '123 Smith Street, Kempsey North NSW 2440'
 },
 {
   type: 'Bunnings',
   suburb: 'Kingsgrove ',
   state: 'NSW',
   lat: -33.939682,
   lng: 151.099018,
   address: 'Cnr Richland St & Kingsgrove Rd Kingsgrove NSW 2208'
 },
 {
   type: 'Bunnings',
   suburb: 'Kirrawee',
   state: 'NSW',
   lat: -34.030349,
   lng: 151.075335,
   address: '127-141 Bath Road, Kirrawee NSW 2232'
 },
 {
   type: 'Bunnings',
   suburb: 'Kotara',
   state: 'NSW',
   lat: -32.944882,
   lng: 151.69807,
   address: '30 Northcott Drive, Kotara NSW 2289'
 },
 {
   type: 'Bunnings',
   suburb: 'Lake Haven ',
   state: 'NSW',
   lat: -33.235924,
   lng: 151.505325,
   address: 'Corner Chelmsford Road & Pacific Highway Charmhaven NSW 2263'
 },
 {
   type: 'Bunnings',
   suburb: 'Lidcombe',
   state: 'NSW',
   lat: -33.846864,
   lng: 151.048183,
   address: '23-29 Parramatta Road, Lidcombe NSW 2141'
 },
 {
   type: 'Bunnings',
   suburb: 'Lismore',
   state: 'NSW',
   lat: -28.810195,
   lng: 153.289347,
   address: '2 Bruxner Highway, Lismore NSW 2480'
 },
 {
   type: 'Bunnings',
   suburb: 'Lithgow',
   state: 'NSW',
   lat: -33.484034,
   lng: 150.144908,
   address: '295 Main Street, Lithgow NSW 2790'
 },
 {
   type: 'Bunnings',
   suburb: 'Maitland',
   state: 'NSW',
   lat: -32.730243,
   lng: 151.548524,
   address: 'Bungaree Street Cnr New England Hwy, Maitland NSW 2320'
 },
 {
   type: 'Bunnings',
   suburb: 'Marsden Park',
   state: 'NSW',
   lat: -33.697027,
   lng: 150.828783,
   address: 'Hollinsworth Road Cnr Richmond Road, Marsden Park NSW 2765'
 },
 {
   type: 'Bunnings',
   suburb: 'McGraths Hill',
   state: 'NSW',
   lat: -33.607635,
   lng: 150.826404,
   address: '264-272 Windsor Road, McGraths Hill NSW 2756'
 },
 {
   type: 'Bunnings',
   suburb: 'Minchinbury',
   state: 'NSW',
   lat: -33.786859,
   lng: 150.829562,
   address: 'John Hines Avenue Cnr Great Western Hwy, Minchinbury NSW 2770'
 },
 {
   type: 'Bunnings',
   suburb: 'Mittagong',
   state: 'NSW',
   lat: -34.455134,
   lng: 150.448134,
   address: 'Tyree Place Cnr Old Hume Hwy, Mittagong NSW 2575'
 },
 {
   type: 'Bunnings',
   suburb: 'Morisset',
   state: 'NSW',
   lat: -33.104521,
   lng: 151.488455,
   address: 'Mayfair Close Cnr Advantage Ave, Morisset NSW 2264'
 },
 {
   type: 'Bunnings',
   suburb: 'Mudgee',
   state: 'NSW',
   lat: -32.602195,
   lng: 149.572904,
   address: 'Castlereagh Highway Cnr Burrundulla Rd, Mudgee NSW 2850'
 },
 {
   type: 'Bunnings',
   suburb: 'Narellan ',
   state: 'NSW',
   lat: -34.046044,
   lng: 150.732564,
   address: 'Corner Northern Road & Porrende Street Narellan NSW 2567'
 },
 {
   type: 'Bunnings',
   suburb: 'Narrabeen',
   state: 'NSW',
   lat: -33.719313,
   lng: 151.297352,
   address: '1307 Pittwater Road, Narrabeen NSW 2101'
 },
 {
   type: 'Bunnings',
   suburb: 'North Penrith ',
   state: 'NSW',
   lat: -33.746679,
   lng: 150.699109,
   address: '2166 Castlereagh Road North Penrith NSW 2750'
 },
 {
   type: 'Bunnings',
   suburb: 'Northmead ',
   state: 'NSW',
   lat: -33.7982,
   lng: 150.99063,
   address: '1c Redbank Road Northmead NSW 2152'
 },
 {
   type: 'Bunnings',
   suburb: 'Nowra',
   state: 'NSW',
   lat: -34.893666,
   lng: 150.603239,
   address: '147-167 Princes Highway, Nowra NSW 2541'
 },
 {
   type: 'Bunnings',
   suburb: 'NSW State Office',
   state: 'NSW',
   lat: -33.82542,
   lng: 151.031784,
   address: '11 Shirley Street, Rosehill NSW 2142'
 },
 {
   type: 'Bunnings',
   suburb: 'Orange',
   state: 'NSW',
   lat: -33.284306,
   lng: 149.0986,
   address: 'Leeds Parade Cnr Northern Distributor Rd, Orange NSW 2800'
 },
 {
   type: 'Bunnings',
   suburb: 'Padstow  NEW',
   state: 'NSW',
   lat: -33.942379,
   lng: 151.036898,
   address: '88 Fairford Rd Padstow NSW 2211'
 },
 {
   type: 'Bunnings',
   suburb: 'Penrith',
   state: 'NSW',
   lat: -33.746679,
   lng: 150.699109,
   address: 'Wolseley Street, Penrith NSW 2740'
 },
 {
   type: 'Bunnings',
   suburb: 'Port Macquarie ',
   state: 'NSW',
   lat: -31.454622,
   lng: 152.872607,
   address: '18 John Oxley Drive Port Macquarie NSW 2444'
 },
 {
   type: 'Bunnings',
   suburb: 'Port Stephens',
   state: 'NSW',
   lat: -32.739746,
   lng: 151.848586,
   address: '78 Port Stephens Drive Cnr Taylors Beach Rd, Port Stephens NSW 2324'
 },
 {
   type: 'Bunnings',
   suburb: 'Randwick',
   state: 'NSW',
   lat: -33.911304,
   lng: 151.242096,
   address: 'Clovelly Road Cnr Kemmis Street, Randwick NSW 2031'
 },
 {
   type: 'Bunnings',
   suburb: 'Rockdale',
   state: 'NSW',
   lat: -33.953231,
   lng: 151.140459,
   address: '383 West Botany Street Cnr Rockdale Plaza Drv, Rockdale NSW 2216'
 },
 {
   type: 'Bunnings',
   suburb: 'Rose Bay ',
   state: 'NSW',
   lat: -33.87215,
   lng: 151.26637,
   address: '538-544 Old South Head Rd Rose Bay NSW 2029'
 },
 {
   type: 'Bunnings',
   suburb: 'Rouse Hill',
   state: 'NSW',
   lat: -33.676339,
   lng: 150.912711,
   address: '352 Annangrove Road, Rouse Hill NSW 2155'
 },
 {
   type: 'Bunnings',
   suburb: 'Rydalmere',
   state: 'NSW',
   lat: -33.808461,
   lng: 151.035368,
   address: '316 Victoria Road, Rydalmere NSW 2116'
 },
 {
   type: 'Bunnings',
   suburb: 'Seven Hills',
   state: 'NSW',
   lat: -33.778576,
   lng: 150.934163,
   address: 'Abbott Road Cnr Old Windsor Road, Seven Hills NSW 1730'
 },
 {
   type: 'Bunnings',
   suburb: 'Shellharbour ',
   state: 'NSW',
   lat: -34.582284,
   lng: 150.775825,
   address: '5 Shandan Circuit Albion Park NSW 2527'
 },
 {
   type: 'Bunnings',
   suburb: 'Singleton',
   state: 'NSW',
   lat: -32.566463,
   lng: 151.176038,
   address: 'New England Highway Cnr Magpie Street, Singleton NSW 2330'
 },
 {
   type: 'Bunnings',
   suburb: 'Smithfield NSW ',
   state: 'NSW',
   lat: -33.848841,
   lng: 150.938146,
   address: 'Cnr Cumberland Hwy & Sturt St Smithfield NSW 2164'
 },
 {
   type: 'Bunnings',
   suburb: 'Tamworth',
   state: 'NSW',
   lat: -31.092751,
   lng: 150.931684,
   address: 'Lockheed Street Cnr Jewry Street, Tamworth NSW 2340'
 },
 {
   type: 'Bunnings',
   suburb: 'Taree',
   state: 'NSW',
   lat: -31.877858,
   lng: 152.438906,
   address: 'Bushland Drive Cnr Wingham Road, Taree NSW 2430'
 },
 {
   type: 'Bunnings',
   suburb: 'Thornleigh',
   state: 'NSW',
   lat: -33.72732,
   lng: 151.078522,
   address: 'Pennant Hills Road, Thornleigh NSW 2120'
 },
 {
   type: 'Bunnings',
   suburb: 'Tuggerah',
   state: 'NSW',
   lat: -33.309916,
   lng: 151.422724,
   address: 'Bryant Drive, Tuggerah NSW 2259'
 },
 {
   type: 'Bunnings',
   suburb: 'Tweed Heads ',
   state: 'NSW',
   lat: -28.181508,
   lng: 153.529624,
   address: '29-41 Greenway Drv Tweed Heads NSW 2486'
 },
 {
   type: 'Bunnings',
   suburb: 'Ulladulla',
   state: 'NSW',
   lat: -35.363383,
   lng: 150.469764,
   address: '131 St Vincent Street, Ulladulla NSW 2539'
 },
 {
   type: 'Bunnings',
   suburb: 'Umina Beach',
   state: 'NSW',
   lat: -33.51765,
   lng: 151.311431,
   address: 'West Street Cnr South Street, Umina Beach NSW 2257'
 },
 {
   type: 'Bunnings',
   suburb: 'Valley Heights',
   state: 'NSW',
   lat: -33.721277,
   lng: 150.596749,
   address: '26 Great Western Highway, Valley Heights NSW 2777'
 },
 {
   type: 'Bunnings',
   suburb: 'Villawood',
   state: 'NSW',
   lat: -33.884954,
   lng: 150.984679,
   address: 'Woodville Road Cnr Tangerine Road, Villawood NSW 2163'
 },
 {
   type: 'Bunnings',
   suburb: 'Wagga Wagga',
   state: 'NSW',
   lat: -35.108503,
   lng: 147.359497,
   address: 'Dobney Avenue Cnr Pearson Street, Wagga Wagga NSW 2650'
 },
 {
   type: 'Bunnings',
   suburb: 'Wallsend',
   state: 'NSW',
   lat: -32.898807,
   lng: 151.650233,
   address: 'Minmi Road Cnr Sandgate Road, Wallsend NSW 2287'
 },
 {
   type: 'Bunnings',
   suburb: 'Warringah Mall ',
   state: 'NSW',
   lat: -33.76562,
   lng: 151.266604,
   address: '1a Cross Street Brookvale Warringah NSW 2100'
 },
 {
   type: 'Bunnings',
   suburb: 'West Gosford',
   state: 'NSW',
   lat: -33.430686,
   lng: 151.322437,
   address: '3 Yallambee Avenue, West Gosford NSW 2250'
 },
 {
   type: 'Bunnings',
   suburb: 'Wollongong',
   state: 'NSW',
   lat: -34.418471,
   lng: 150.898903,
   address: 'Lot 205 Gipps Street, Wollongong NSW 2500'
 },
 {
   type: 'Bunnings',
   suburb: 'Young  NEW',
   state: 'NSW',
   lat: -34.311648,
   lng: 148.287649,
   address: '288 Boorowa St Young NSW 2594'
 },
 {
   type: 'Bunnings',
   suburb: 'Alice Springs',
   state: 'NT',
   lat: -23.698651,
   lng: 133.882345,
   address: 'Power Street Cnr Stuart Hwy, Alice Springs NT 0870'
 },
 {
   type: 'Bunnings',
   suburb: 'Darwin',
   state: 'NT',
   lat: -12.460477,
   lng: 130.842984,
   address: 'Osgood Drive Cnr Bagot Road, Darwin NT 0800'
 },
 {
   type: 'Bunnings',
   suburb: 'Palmerston',
   state: 'NT',
   lat: -12.507829,
   lng: 130.982781,
   address: 'University Avenue Cnr Roystonea Ave, Palmerston NT 0830'
 },
 {
   type: 'Bunnings',
   suburb: 'Acacia Ridge ',
   state: 'QLD',
   lat: -27.598029,
   lng: 153.03573,
   address: '441 Bradman st Acacia Ridge QLD 4110'
 },
 {
   type: 'Bunnings',
   suburb: 'Airlie Beach',
   state: 'QLD',
   lat: -20.272893,
   lng: 148.716829,
   address: 'Pandanus Drive Cnr Shute Harber Rd, Airlie Beach QLD 4802'
 },
 {
   type: 'Bunnings',
   suburb: 'Arundel',
   state: 'QLD',
   lat: -27.93359,
   lng: 153.378453,
   address: '292 Brisbane Road, Arundel QLD 4214'
 },
 {
   type: 'Bunnings',
   suburb: 'Atherton',
   state: 'QLD',
   lat: -17.263562,
   lng: 145.477635,
   address: '14-16 Main Street, Atherton QLD 4883'
 },
 {
   type: 'Bunnings',
   suburb: 'Bethania',
   state: 'QLD',
   lat: -27.684747,
   lng: 153.158293,
   address: '9 Glasson Drive, Bethania QLD 4205'
 },
 {
   type: 'Bunnings',
   suburb: 'Brendale',
   state: 'QLD',
   lat: -27.320917,
   lng: 152.977906,
   address: 'Kremzow Road Cnr Old North Road, Brendale QLD 4500'
 },
 {
   type: 'Bunnings',
   suburb: 'Browns Plains',
   state: 'QLD',
   lat: -27.666096,
   lng: 153.048379,
   address: 'Browns Plains Road Cnr Commerce Drive, Browns Plains QLD 4118'
 },
 {
   type: 'Bunnings',
   suburb: 'Bundaberg',
   state: 'QLD',
   lat: -24.983725,
   lng: 152.153072,
   address: '30 Johanna Blv, Bundaberg QLD 4670'
 },
 {
   type: 'Bunnings',
   suburb: 'Bundamba',
   state: 'QLD',
   lat: -27.597698,
   lng: 152.811819,
   address: 'Mining Street Cnr Brisbane Rd, Bundamba QLD 4304'
 },
 {
   type: 'Bunnings',
   suburb: 'Burleigh Waters',
   state: 'QLD',
   lat: -28.085637,
   lng: 153.435219,
   address: 'Bermuda Street Cnr Reedy Creek Road, Burleigh Waters QLD 4220'
 },
 {
   type: 'Bunnings',
   suburb: 'Cairns',
   state: 'QLD',
   lat: -16.946183,
   lng: 145.76564,
   address: '71-83 Kenny Street, Portsmith QLD 4870'
 },
 {
   type: 'Bunnings',
   suburb: 'Caloundra',
   state: 'QLD',
   lat: -26.803604,
   lng: 153.120602,
   address: '54 Caloundra Road, Caloundra QLD 4551'
 },
 {
   type: 'Bunnings',
   suburb: 'Cannon Hill',
   state: 'QLD',
   lat: -27.471724,
   lng: 153.091736,
   address: '1881 Creek Road, Cannon Hill QLD 4170'
 },
 {
   type: 'Bunnings',
   suburb: 'Capalaba',
   state: 'QLD',
   lat: -27.532079,
   lng: 153.189961,
   address: 'Mount Cotton Road Cnr Pittwin Nth Rd, Capalaba QLD 4157'
 },
 {
   type: 'Bunnings',
   suburb: 'Carseldine',
   state: 'QLD',
   lat: -27.346237,
   lng: 153.012822,
   address: '1925 Gympie Road, Carseldine QLD 4034'
 },
 {
   type: 'Bunnings',
   suburb: 'Dalby',
   state: 'QLD',
   lat: -27.197713,
   lng: 151.275909,
   address: '17775 Warrego Highway, Dalby QLD 4405'
 },
 {
   type: 'Bunnings',
   suburb: 'Fairfield Waters ',
   state: 'QLD',
   lat: -19.307255,
   lng: 146.813161,
   address: '2 Darcy Drive Idalia QLD 4811'
 },
 {
   type: 'Bunnings',
   suburb: 'Gladstone',
   state: 'QLD',
   lat: -24.148797,
   lng: 151.182876,
   address: '220 Dawson Highway, Gladstone QLD 4680'
 },
 {
   type: 'Bunnings',
   suburb: 'Gympie',
   state: 'QLD',
   lat: -26.182873,
   lng: 152.665451,
   address: 'Bruce Highway Cnr Hall Road, Gympie QLD 4570'
 },
 {
   type: 'Bunnings',
   suburb: 'Hervey Bay',
   state: 'QLD',
   lat: -25.288703,
   lng: 152.840944,
   address: 'Boat Harbour Drive Cnr Main St, Hervey Bay QLD 4655'
 },
 {
   type: 'Bunnings',
   suburb: 'Indooroopilly',
   state: 'QLD',
   lat: -27.504309,
   lng: 152.97417,
   address: '94-108 Coonan Street, Indooroopilly QLD 4068'
 },
 {
   type: 'Bunnings',
   suburb: 'Innisfail',
   state: 'QLD',
   lat: -17.524973,
   lng: 146.027572,
   address: '35 Glady Street, Innisfail QLD 4860'
 },
 {
   type: 'Bunnings',
   suburb: 'Kawana ',
   state: 'QLD',
   lat: -26.735979,
   lng: 153.119497,
   address: '566 Kawana Way Birtinya QLD 4575'
 },
 {
   type: 'Bunnings',
   suburb: 'Keperra ',
   state: 'QLD',
   lat: -27.421616,
   lng: 152.948736,
   address: '481 Settlement Road Keperra QLD 4054'
 },
 {
   type: 'Bunnings',
   suburb: 'Kingaroy ',
   state: 'QLD',
   lat: -26.558146,
   lng: 151.839613,
   address: '2 Walter Road Kingaroy QLD 4610'
 },
 {
   type: 'Bunnings',
   suburb: 'Lawnton',
   state: 'QLD',
   lat: -27.288121,
   lng: 152.985461,
   address: '727 Gympie Road, Lawnton QLD 4501'
 },
 {
   type: 'Bunnings',
   suburb: 'Logan Rd Mt Gravatt ',
   state: 'QLD',
   lat: -27.531268,
   lng: 153.074104,
   address: '1290 Logan Rd Mt Gravatt East QLD 4122'
 },
 {
   type: 'Bunnings',
   suburb: 'Loganholme',
   state: 'QLD',
   lat: -27.686471,
   lng: 153.19078,
   address: '3786 Pacific Highway, Loganholme QLD 4127'
 },
 {
   type: 'Bunnings',
   suburb: 'Mackay North ',
   state: 'QLD',
   lat: -21.070639,
   lng: 149.124942,
   address: 'Corner Mackay Bucasia Road & Holts Road Richmond QLD 4740'
 },
 {
   type: 'Bunnings',
   suburb: 'Manly West',
   state: 'QLD',
   lat: -27.455023,
   lng: 153.166705,
   address: '389 Wondall Road, Manly West QLD 4179'
 },
 {
   type: 'Bunnings',
   suburb: 'Maroochydore',
   state: 'QLD',
   lat: -26.666107,
   lng: 153.086181,
   address: '78-90 Dalton Drive, Maroochydore QLD 4558'
 },
 {
   type: 'Bunnings',
   suburb: 'Maryborough',
   state: 'QLD',
   lat: -25.536263,
   lng: 152.695908,
   address: '107 Ferry Street, Maryborough QLD 4650'
 },
 {
   type: 'Bunnings',
   suburb: 'Mermaid Waters',
   state: 'QLD',
   lat: -28.048791,
   lng: 153.421825,
   address: 'Markeri Street Cnr Bermuda St, Mermaid Waters QLD 4218'
 },
 {
   type: 'Bunnings',
   suburb: 'Morayfield',
   state: 'QLD',
   lat: -27.136157,
   lng: 152.925634,
   address: 'Morayfield Road Cnr Walkers Rd, Morayfield QLD 4506'
 },
 {
   type: 'Bunnings',
   suburb: 'Mt Gravatt',
   state: 'QLD',
   lat: -27.537286,
   lng: 153.076779,
   address: 'Wecker Road, Mt Gravatt QLD 4122'
 },
 {
   type: 'Bunnings',
   suburb: 'Mt Isa',
   state: 'QLD',
   lat: -20.033321,
   lng: 138.767843,
   address: '93-95 Camooweal Street, Mt Isa QLD 4825'
 },
 {
   type: 'Bunnings',
   suburb: 'Nerang',
   state: 'QLD',
   lat: -27.985489,
   lng: 153.328687,
   address: 'Pappas Way Cnr Mortensen Rd, Nerang QLD 4211'
 },
 {
   type: 'Bunnings',
   suburb: 'Newstead ',
   state: 'QLD',
   lat: -27.449887,
   lng: 153.04187,
   address: '142 Breakfast Creek Rd Newstead QLD 4006'
 },
 {
   type: 'Bunnings',
   suburb: 'Noosaville',
   state: 'QLD',
   lat: -26.417187,
   lng: 153.058851,
   address: 'Eumundi Noosa Rd & Gateway Drive, Noosaville QLD 4566'
 },
 {
   type: 'Bunnings',
   suburb: 'North Lakes',
   state: 'QLD',
   lat: -27.222956,
   lng: 153.01207,
   address: '18-28 Cook Court, North Lakes QLD 4509'
 },
 {
   type: 'Bunnings',
   suburb: 'Oxenford',
   state: 'QLD',
   lat: -27.888401,
   lng: 153.312856,
   address: 'Global Plaza, Oxenford QLD 4210'
 },
 {
   type: 'Bunnings',
   suburb: 'Oxley',
   state: 'QLD',
   lat: -27.567408,
   lng: 152.981088,
   address: '32 Blunder Road, Oxley QLD 4075'
 },
 {
   type: 'Bunnings',
   suburb: 'Paget',
   state: 'QLD',
   lat: -21.169433,
   lng: 149.173004,
   address: '165-179 Archibald Street, Paget QLD 4740'
 },
 {
   type: 'Bunnings',
   suburb: 'Pimpama  NEW',
   state: 'QLD',
   lat: -27.825518,
   lng: 153.325614,
   address: '2 Yawalpah Rd Pimpama QLD 4209'
 },
 {
   type: 'Bunnings',
   suburb: 'QLD State Office',
   state: 'QLD',
   lat: -23.033708,
   lng: 144.417144,
   address: 'Nexus Building Level 3 96 Mt Gravatt Capalaba Road, Upper Mt Gravatt QLD 4122'
 },
 {
   type: 'Bunnings',
   suburb: 'Robina ',
   state: 'QLD',
   lat: -28.084826,
   lng: 153.389795,
   address: '57 Scottsdale Drive Robina QLD 4226'
 },
 {
   type: 'Bunnings',
   suburb: 'Rockhampton ',
   state: 'QLD',
   lat: -23.329675,
   lng: 150.519439,
   address: '540 Yaamba Rd Norman Gardens QLD 4701'
 },
 {
   type: 'Bunnings',
   suburb: 'Rocklea',
   state: 'QLD',
   lat: -27.546359,
   lng: 153.012273,
   address: 'Balham Road Cnr Granard Rd, Rocklea QLD 4106'
 },
 {
   type: 'Bunnings',
   suburb: 'Rothwell',
   state: 'QLD',
   lat: -27.20987,
   lng: 153.055855,
   address: 'Bremner Road Cnr Anzac Avenue, Rothwell QLD 4022'
 },
 {
   type: 'Bunnings',
   suburb: 'Smithfield',
   state: 'QLD',
   lat: -16.8316,
   lng: 145.694715,
   address: '2-4 Mount Milman Drive, Smithfield QLD 4878'
 },
 {
   type: 'Bunnings',
   suburb: 'Southport',
   state: 'QLD',
   lat: -27.97238,
   lng: 153.404351,
   address: '500 Olsen Avenue, Southport QLD 4215'
 },
 {
   type: 'Bunnings',
   suburb: 'Springfield Central',
   state: 'QLD',
   lat: -27.688786,
   lng: 152.908478,
   address: 'Main Street Cnr Southern Cross Circuit, Springfield Central QLD 4300'
 },
 {
   type: 'Bunnings',
   suburb: 'Stafford',
   state: 'QLD',
   lat: -27.41417,
   lng: 153.010468,
   address: '450 Stafford Road, Stafford QLD 4053'
 },
 {
   type: 'Bunnings',
   suburb: 'Toombul ',
   state: 'QLD',
   lat: -27.401843,
   lng: 153.059876,
   address: 'Toombul Shopping Centre 1015 Sandgate Road Nundah QLD 4012'
 },
 {
   type: 'Bunnings',
   suburb: 'Toowoomba City',
   state: 'QLD',
   lat: -27.552118,
   lng: 151.9537,
   address: '239-267 Ruthven Street, Toowoomba City QLD 4350'
 },
 {
   type: 'Bunnings',
   suburb: 'Tweed Heads South',
   state: 'QLD',
   lat: -25.279827,
   lng: 152.825861,
   address: '29-41 Greenway Drive, Tweed Heads South QLD 2486'
 },
 {
   type: 'Bunnings',
   suburb: 'Townsville ',
   state: 'QLD',
   lat: -19.262654,
   lng: 146.761373,
   address: 'Corner Dalrymple Road & Duckworth Street Garbutt QLD 4814'
 },
 {
   type: 'Bunnings',
   suburb: 'Townsville North ',
   state: 'QLD',
   lat: -19.25496,
   lng: 146.707498,
   address: 'Corner Nexus Drive and North Shore Boulevard Burdell QLD 4818'
 },
 {
   type: 'Bunnings',
   suburb: 'Underwood',
   state: 'QLD',
   lat: -27.618984,
   lng: 153.112502,
   address: '19-37 Compton Road, Underwood QLD 4119'
 },
 {
   type: 'Bunnings',
   suburb: 'Victoria Point',
   state: 'QLD',
   lat: -27.58987,
   lng: 153.286786,
   address: 'Cleveland Redland Bay Road Cnr Colburn Ave, Victoria Point QLD 4165'
 },
 {
   type: 'Bunnings',
   suburb: 'Virginia ',
   state: 'QLD',
   lat: -27.375996,
   lng: 153.063174,
   address: '1836 Sandgate Rd Virginia QLD 4014'
 },
 {
   type: 'Bunnings',
   suburb: 'Warwick',
   state: 'QLD',
   lat: -28.220632,
   lng: 152.031799,
   address: '43 Palmerin Street, Warwick QLD 4370'
 },
 {
   type: 'Bunnings',
   suburb: 'West Ipswich',
   state: 'QLD',
   lat: -27.620587,
   lng: 152.748263,
   address: 'Brisbane Street Cnr Darling Street, West Ipswich QLD 4305'
 },
 {
   type: 'Bunnings',
   suburb: 'Yeppoon',
   state: 'QLD',
   lat: -23.139594,
   lng: 150.739654,
   address: '67 Tanby Road, Yeppoon QLD 4703'
 },
 {
   type: 'Bunnings',
   suburb: 'Adelaide Airport  NEW',
   state: 'SA',
   lat: -34.935172,
   lng: 138.537286,
   address: 'James Schofield Drive Adelaide Airport SA 5950'
 },
 {
   type: 'Bunnings',
   suburb: 'Berri',
   state: 'SA',
   lat: -34.275612,
   lng: 140.612094,
   address: 'Hoskin Road Cnr Old Sturt Hwy, Berri SA 5343'
 },
 {
   type: 'Bunnings',
   suburb: 'Edwardstown ',
   state: 'SA',
   lat: -34.275612,
   lng: 140.612094,
   address: 'Cnr Old Sturt Highway & Hoskin Road Berri SA 5343'
 },
 {
   type: 'Bunnings',
   suburb: 'Gawler ',
   state: 'SA',
   lat: -34.980251,
   lng: 138.569511,
   address: '1028 - 1042 South Road Edwardstown SA 5039'
 },
 {
   type: 'Bunnings',
   suburb: 'Kent Town',
   state: 'SA',
   lat: -34.919503,
   lng: 138.619566,
   address: '63-65 Rundle Street, Kent Town SA 5067'
 },
 {
   type: 'Bunnings',
   suburb: 'Marion',
   state: 'SA',
   lat: -35.006292,
   lng: 138.553497,
   address: '461 Morphett Road, Marion SA 5043'
 },
 {
   type: 'Bunnings',
   suburb: 'Mile End ',
   state: 'SA',
   lat: -34.925192,
   lng: 138.57864,
   address: '108 Railway Terrace Mile End SA 5031'
 },
 {
   type: 'Bunnings',
   suburb: 'Modbury',
   state: 'SA',
   lat: -34.832552,
   lng: 138.683371,
   address: '933-945 North East Road, Modbury SA 5092'
 },
 {
   type: 'Bunnings',
   suburb: 'Mt Barker',
   state: 'SA',
   lat: -29.467956,
   lng: 135.915347,
   address: 'Little Hampton Princes Highway Cnr Mt Barker Road, Mt Barker SA 5251'
 },
 {
   type: 'Bunnings',
   suburb: 'Mt Gambier',
   state: 'SA',
   lat: -37.80598,
   lng: 140.793125,
   address: '182-248 Penola Road, Mt Gambier SA 5290'
 },
 {
   type: 'Bunnings',
   suburb: 'Munno Para',
   state: 'SA',
   lat: -34.669373,
   lng: 138.69889,
   address: 'Curtis Road Cnr Frisby Rd, Munno Para SA 5115'
 },
 {
   type: 'Bunnings',
   suburb: 'Murray Bridge',
   state: 'SA',
   lat: -35.130613,
   lng: 139.267949,
   address: 'Maurice Road Cnr Adelaide Rd, Murray Bridge SA 5253'
 },
 {
   type: 'Bunnings',
   suburb: 'Noarlunga',
   state: 'SA',
   lat: -35.189,
   lng: 138.496018,
   address: 'Beach Road Cnr Goldsmith Drv, Noarlunga SA 5168'
 },
 {
   type: 'Bunnings',
   suburb: 'Parafield',
   state: 'SA',
   lat: -34.79652,
   lng: 138.630759,
   address: 'Main North Road Cnr Kings Rd, Parafield SA 5106'
 },
 {
   type: 'Bunnings',
   suburb: 'Port Lincoln',
   state: 'SA',
   lat: -34.730421,
   lng: 135.845127,
   address: 'St Andrews Terrace Cnr Verran Terrace, Port Lincoln SA 5606'
 },
 {
   type: 'Bunnings',
   suburb: 'Prospect',
   state: 'SA',
   lat: -34.883563,
   lng: 138.592922,
   address: 'Churchill Road Cnr Regency Rd, Prospect SA 5082'
 },
 {
   type: 'Bunnings',
   suburb: 'Reynella ',
   state: 'SA',
   lat: -35.096527,
   lng: 138.54372,
   address: '38 - 44 Panalatinga Road Old Reynella SA 5161'
 },
 {
   type: 'Bunnings',
   suburb: 'SA State Office',
   state: 'SA',
   lat: -34.925192,
   lng: 138.57864,
   address: '108 Railway Terrace, Mile End SA 5031'
 },
 {
   type: 'Bunnings',
   suburb: 'Seaford',
   state: 'SA',
   lat: -35.18063,
   lng: 138.499806,
   address: 'Main South Road Cnr Seaford Rd, Old Noarlunga SA 5168'
 },
 {
   type: 'Bunnings',
   suburb: 'Victor Harbor ',
   state: 'SA',
   lat: -35.550015,
   lng: 138.612357,
   address: 'Lot 5 Adelaide Rd Victor Harbor SA 5211'
 },
 {
   type: 'Bunnings',
   suburb: 'Windsor Gardens',
   state: 'SA',
   lat: -34.867126,
   lng: 138.650904,
   address: '432 North East Road, Windsor Gardens SA 5087'
 },
 {
   type: 'Bunnings',
   suburb: 'Woodville',
   state: 'SA',
   lat: -34.874322,
   lng: 138.53594,
   address: 'Cheltenham Street Cnr Port Rd, Woodville SA 5011'
 },
 {
   type: 'Bunnings',
   suburb: 'Burnie',
   state: 'TAS',
   lat: -41.053415,
   lng: 145.905099,
   address: '1-5 Reeves Street, Burnie TAS 7320'
 },
 {
   type: 'Bunnings',
   suburb: 'Glenorchy',
   state: 'TAS',
   lat: -42.831077,
   lng: 147.285057,
   address: '2 Howard Road, Glenorchy TAS 7010'
 },
 {
   type: 'Bunnings',
   suburb: 'Invermay',
   state: 'TAS',
   lat: -41.421307,
   lng: 147.133099,
   address: 'Cnr Lindsay St, Invermay TAS 7248'
 },
 {
   type: 'Bunnings',
   suburb: 'Kings Meadows',
   state: 'TAS',
   lat: -41.481399,
   lng: 147.155331,
   address: '90 Connector Park Drive, Kings Meadows TAS 7249'
 },
 {
   type: 'Bunnings',
   suburb: 'Kingston',
   state: 'TAS',
   lat: -42.984623,
   lng: 147.292968,
   address: '163 Channel Highway, Kingston TAS 7050'
 },
 {
   type: 'Bunnings',
   suburb: 'Mornington TAS ',
   state: 'TAS',
   lat: -42.861552,
   lng: 147.392397,
   address: '25 South Arm HWY Mornington TAS 7018'
 },
 {
   type: 'Bunnings',
   suburb: 'Launceston',
   state: 'TAS',
   lat: -41.43951,
   lng: 147.13763,
   address: 'Goderich Street Cnr Lindsay Street, Launceston TAS 7250'
 },
 {
   type: 'Bunnings',
   suburb: 'Altona',
   state: 'VIC',
   lat: -37.861782,
   lng: 144.806148,
   address: 'Millers Road Cnr Ross Road, Altona VIC 3018'
 },
 {
   type: 'Bunnings',
   suburb: 'Bairnsdale',
   state: 'VIC',
   lat: -37.835121,
   lng: 147.603554,
   address: '485-487 Main Street, Bairnsdale VIC 3875'
 },
 {
   type: 'Bunnings',
   suburb: 'Ballarat',
   state: 'VIC',
   lat: -37.449359,
   lng: 143.734293,
   address: '306-312 Creswick Road, Ballarat VIC 3350'
 },
 {
   type: 'Bunnings',
   suburb: 'Bayswater',
   state: 'VIC',
   lat: -37.830134,
   lng: 145.263692,
   address: '183-225 Canterbury Road, Bayswater VIC 3153'
 },
 {
   type: 'Bunnings',
   suburb: 'Bendigo',
   state: 'VIC',
   lat: -36.763446,
   lng: 144.27066,
   address: '263-265 High Street, Bendigo VIC 3550'
 },
 {
   type: 'Bunnings',
   suburb: 'Box Hill',
   state: 'VIC',
   lat: -37.821529,
   lng: 145.126096,
   address: '259 Middleborough Road, Box Hill VIC 3128'
 },
 {
   type: 'Bunnings',
   suburb: 'Broadmeadows',
   state: 'VIC',
   lat: -37.675144,
   lng: 144.921366,
   address: 'Homemaker Centre 100 Pearcedale Parade, Broadmeadows VIC 3047'
 },
 {
   type: 'Bunnings',
   suburb: 'Brunswick',
   state: 'VIC',
   lat: -37.767552,
   lng: 144.961832,
   address: '415 Sydney Road, Brunswick VIC 3055'
 },
 {
   type: 'Bunnings',
   suburb: 'Caroline Springs',
   state: 'VIC',
   lat: -37.759203,
   lng: 144.748146,
   address: '1067-1125 Western Highway, Caroline Springs VIC 3023'
 },
 {
   type: 'Bunnings',
   suburb: 'Carrum Downs',
   state: 'VIC',
   lat: -38.093932,
   lng: 145.175238,
   address: '600 Frankston Dandenong Road, Carrum Downs VIC 3201'
 },
 {
   type: 'Bunnings',
   suburb: 'Chadstone',
   state: 'VIC',
   lat: -37.882523,
   lng: 145.099944,
   address: '675-685 Warringal Road, Chadstone VIC 3148'
 },
 {
   type: 'Bunnings',
   suburb: 'Clyde North ',
   state: 'VIC',
   lat: -38.149821,
   lng: 145.354085,
   address: '46S Hamersley Drive Clyde North VIC 3978'
 },
 {
   type: 'Bunnings',
   suburb: 'Coburg',
   state: 'VIC',
   lat: -37.744675,
   lng: 144.964201,
   address: '64-96 Gaffney Street, Coburg VIC 3058'
 },
 {
   type: 'Bunnings',
   suburb: 'Colac',
   state: 'VIC',
   lat: -38.34097,
   lng: 143.591454,
   address: '130-138 Bromfield Street, Colac VIC 3250'
 },
 {
   type: 'Bunnings',
   suburb: 'Collingwood',
   state: 'VIC',
   lat: -37.80929,
   lng: 144.989813,
   address: '179-201 Victoria Parade, Collingwood VIC 3066'
 },
 {
   type: 'Bunnings',
   suburb: 'Craigieburn',
   state: 'VIC',
   lat: -37.583455,
   lng: 144.941764,
   address: '700 Hume Highway, Craigieburn VIC 3064'
 },
 {
   type: 'Bunnings',
   suburb: 'Cranbourne',
   state: 'VIC',
   lat: -38.081275,
   lng: 145.270218,
   address: '1205 Thompsons Road, Cranbourne VIC 3977'
 },
 {
   type: 'Bunnings',
   suburb: 'Croydon',
   state: 'VIC',
   lat: -37.773566,
   lng: 145.293421,
   address: '268-288 Maroondah Highway, Croydon VIC 3136'
 },
 {
   type: 'Bunnings',
   suburb: 'Dandenong South',
   state: 'VIC',
   lat: -37.983246,
   lng: 145.212149,
   address: '101 Princes Highway, Dandenong South VIC 3175'
 },
 {
   type: 'Bunnings',
   suburb: 'Delacombe ',
   state: 'VIC',
   lat: -37.59061,
   lng: 143.807737,
   address: '307 Smythes Rd Delacombe VIC 3356'
 },
 {
   type: 'Bunnings',
   suburb: 'East Pakenham ',
   state: 'VIC',
   lat: -38.082448,
   lng: 145.488803,
   address: '56-58 Bald Hill Rd Pakenham VIC 3810'
 },
 {
   type: 'Bunnings',
   suburb: 'Echuca',
   state: 'VIC',
   lat: -36.140733,
   lng: 144.757055,
   address: '131 Ogilvie Avenue, Echuca VIC 3564'
 },
 {
   type: 'Bunnings',
   suburb: 'Eltham',
   state: 'VIC',
   lat: -37.718065,
   lng: 145.158801,
   address: 'Bridge Street Cnr Silver Street, Eltham VIC 3095'
 },
 {
   type: 'Bunnings',
   suburb: 'Epping',
   state: 'VIC',
   lat: -37.649305,
   lng: 145.003819,
   address: '310 Cooper Street, Epping VIC 3076'
 },
 {
   type: 'Bunnings',
   suburb: 'Epsom',
   state: 'VIC',
   lat: -36.694378,
   lng: 144.31761,
   address: 'Midland Highway Cnr Toma Court, Epsom VIC 3551'
 },
 {
   type: 'Bunnings',
   suburb: 'Fairfield ',
   state: 'VIC',
   lat: -37.772375,
   lng: 145.021292,
   address: '266 Darebin Road Fairfield VIC 3078'
 },
 {
   type: 'Bunnings',
   suburb: 'Narre Warren',
   state: 'VIC',
   lat: -38.012325,
   lng: 145.301574,
   address: '64-86 Narre Warren Nth Road, Narre Warren VIC 3805'
 },
 {
   type: 'Bunnings',
   suburb: 'Frankston',
   state: 'VIC',
   lat: -38.148005,
   lng: 145.146311,
   address: 'McManon Street Cnr Getrude Street, Frankston VIC 3199'
 },
 {
   type: 'Bunnings',
   suburb: 'Geelong North',
   state: 'VIC',
   lat: -38.097678,
   lng: 144.35488,
   address: '5-19 Princes Highway, Norlane VIC 3214'
 },
 {
   type: 'Bunnings',
   suburb: 'Hamilton ',
   state: 'VIC',
   lat: -37.743278,
   lng: 142.028719,
   address: 'Corner Glenelg & Henty Highway Hamilton VIC 3300'
 },
 {
   type: 'Bunnings',
   suburb: 'Hastings',
   state: 'VIC',
   lat: -38.300562,
   lng: 145.176673,
   address: '1837 Frankston Flinders Road, Hastings VIC 3915'
 },
 {
   type: 'Bunnings',
   suburb: 'Hawthorn',
   state: 'VIC',
   lat: -37.822324,
   lng: 145.031513,
   address: '230 Burwood Road, Hawthorn VIC 3122'
 },
 {
   type: 'Bunnings',
   suburb: 'Hoppers Crossing',
   state: 'VIC',
   lat: -37.876173,
   lng: 144.713799,
   address: '221-231 Old Geelong Road, Hoppers Crossing VIC 3029'
 },
 {
   type: 'Bunnings',
   suburb: 'Horsham',
   state: 'VIC',
   lat: -36.716632,
   lng: 142.201896,
   address: '24-38 Wilson Street, Horsham VIC 3400'
 },
 {
   type: 'Bunnings',
   suburb: 'Keysborough',
   state: 'VIC',
   lat: -38.005867,
   lng: 145.167886,
   address: 'Springvale Road Cnr Springvale Road, Keysborough VIC 3173'
 },
 {
   type: 'Bunnings',
   suburb: 'Leopold',
   state: 'VIC',
   lat: -38.186271,
   lng: 144.453483,
   address: '621-639 Bellarine Highway, Leopold VIC 3224'
 },
 {
   type: 'Bunnings',
   suburb: 'Lilydale ',
   state: 'VIC',
   lat: -37.757394,
   lng: 145.347582,
   address: '118 Main St Lilydale VIC 3140'
 },
 {
   type: 'Bunnings',
   suburb: 'Maribyrnong',
   state: 'VIC',
   lat: -37.769718,
   lng: 144.888013,
   address: 'Rosamond Road Cnr Willamson Road, Maribyrnong VIC 3032'
 },
 {
   type: 'Bunnings',
   suburb: 'Melton',
   state: 'VIC',
   lat: -37.688338,
   lng: 144.56389,
   address: '149-169 Barries Rd Melton West, Melton VIC 3337'
 },
 {
   type: 'Bunnings',
   suburb: 'Mentone',
   state: 'VIC',
   lat: -37.97733,
   lng: 145.068208,
   address: '23-27 Nepean Highway, Mentone VIC 3194'
 },
 {
   type: 'Bunnings',
   suburb: 'Mernda ',
   state: 'VIC',
   lat: -37.603727,
   lng: 145.094274,
   address: '1405 Plenty Rd Mernda VIC 3754'
 },
 {
   type: 'Bunnings',
   suburb: 'Mildura',
   state: 'VIC',
   lat: -34.217928,
   lng: 142.150307,
   address: '639-665 Fifteenth Street, Mildura VIC 3500'
 },
 {
   type: 'Bunnings',
   suburb: 'Mill Park',
   state: 'VIC',
   lat: -37.666626,
   lng: 145.07188,
   address: '761-781 Plenty Road, Mill Park VIC 3082'
 },
 {
   type: 'Bunnings',
   suburb: 'Moorabbin',
   state: 'VIC',
   lat: -37.941542,
   lng: 145.057782,
   address: 'Warrigal Road Cnr Fairchild Street, Moorabbin VIC 3189'
 },
 {
   type: 'Bunnings',
   suburb: 'Mornington',
   state: 'VIC',
   lat: -38.219254,
   lng: 145.058559,
   address: '1100 Nepean Highway, Mornington VIC 3931'
 },
 {
   type: 'Bunnings',
   suburb: 'Morwell',
   state: 'VIC',
   lat: -38.259308,
   lng: 146.407471,
   address: 'Midvalley Shopping Centre Princes Highway, Morwell VIC 3840'
 },
 {
   type: 'Bunnings',
   suburb: 'Preston',
   state: 'VIC',
   lat: -37.741694,
   lng: 145.007808,
   address: '120 Chifley Drive Cnr Murray Rd, Preston VIC 3072'
 },
 {
   type: 'Bunnings',
   suburb: 'Notting Hill',
   state: 'VIC',
   lat: -37.901219,
   lng: 145.142006,
   address: '232-256 Ferntree Gully Road, Notting Hill VIC 3168'
 },
 {
   type: 'Bunnings',
   suburb: 'Nunawading',
   state: 'VIC',
   lat: -37.818701,
   lng: 145.177535,
   address: '250 Whitehorse Road, Nunawading VIC 3131'
 },
 {
   type: 'Bunnings',
   suburb: 'Oakleigh South',
   state: 'VIC',
   lat: -37.926272,
   lng: 145.099199,
   address: '1126 Centre Road, Oakleigh South VIC 3167'
 },
 {
   type: 'Bunnings',
   suburb: 'Pakenham',
   state: 'VIC',
   lat: -38.071696,
   lng: 145.486405,
   address: '855 Princes Highway, Pakenham VIC 3810'
 },
 {
   type: 'Bunnings',
   suburb: 'Port Melbourne',
   state: 'VIC',
   lat: -37.830656,
   lng: 144.939366,
   address: '501 Williamstown Road, Port Melbourne VIC 3207'
 },
 {
   type: 'Bunnings',
   suburb: 'Ringwood',
   state: 'VIC',
   lat: -37.815563,
   lng: 145.222362,
   address: 'Ringwood Square Shopping Centre, Ringwood VIC 3134'
 },
 {
   type: 'Bunnings',
   suburb: 'Rosebud',
   state: 'VIC',
   lat: -38.372423,
   lng: 144.889331,
   address: '282 Boneo Road, Rosebud VIC 3939'
 },
 {
   type: 'Bunnings',
   suburb: 'Sale',
   state: 'VIC',
   lat: -38.105053,
   lng: 147.073402,
   address: '48 Macarthur Street, Sale VIC 3850'
 },
 {
   type: 'Bunnings',
   suburb: 'Scoresby',
   state: 'VIC',
   lat: -37.897489,
   lng: 145.242139,
   address: '1467 Ferntree Gully Road, Scoresby VIC 3179'
 },
 {
   type: 'Bunnings',
   suburb: 'Seymour  NEW',
   state: 'VIC',
   lat: -37.027501,
   lng: 145.141807,
   address: '63 Anzac Ave Seymour VIC 3660'
 },
 {
   type: 'Bunnings',
   suburb: 'Shepparton',
   state: 'VIC',
   lat: -36.387398,
   lng: 145.429745,
   address: '225 Benalla Road, Shepparton VIC 3630'
 },
 {
   type: 'Bunnings',
   suburb: 'Springvale',
   state: 'VIC',
   lat: -37.937332,
   lng: 145.161629,
   address: '849 Princes Highway, Springvale VIC 3171'
 },
 {
   type: 'Bunnings',
   suburb: 'Sunbury',
   state: 'VIC',
   lat: -37.589874,
   lng: 144.71525,
   address: '95 Vineyard Road, Sunbury VIC 3429'
 },
 {
   type: 'Bunnings',
   suburb: 'Sunshine',
   state: 'VIC',
   lat: -37.788817,
   lng: 144.835605,
   address: '480 Ballarat Road Cnr McIntyre Rd, Sunshine VIC 3020'
 },
 {
   type: 'Bunnings',
   suburb: 'Swan Hill',
   state: 'VIC',
   lat: -35.341733,
   lng: 143.543603,
   address: 'Beveridge Street Cnr Nyah Road, Swan Hill VIC 3585'
 },
 {
   type: 'Bunnings',
   suburb: 'Taylors Lakes',
   state: 'VIC',
   lat: -37.696897,
   lng: 144.780511,
   address: '430 Melton Highway, Taylors Lakes VIC 3038'
 },
 {
   type: 'Bunnings',
   suburb: 'Thomastown',
   state: 'VIC',
   lat: -37.693165,
   lng: 145.024331,
   address: '11 Dalton Road, Thomastown VIC 3074'
 },
 {
   type: 'Bunnings',
   suburb: 'Torquay',
   state: 'VIC',
   lat: -38.308323,
   lng: 144.317913,
   address: '1 Beacon Boulevard, Torquay VIC 3228'
 },
 {
   type: 'Bunnings',
   suburb: 'Traralgon',
   state: 'VIC',
   lat: -38.190795,
   lng: 146.559675,
   address: '191-193 Argyle Street, Traralgon VIC 3844'
 },
 {
   type: 'Bunnings',
   suburb: 'Vermont South',
   state: 'VIC',
   lat: -37.858755,
   lng: 145.195898,
   address: '606-634 Burwood Highway, Vermont South VIC 3133'
 },
 {
   type: 'Bunnings',
   suburb: 'VIC State Office',
   state: 'VIC',
   lat: -37.833448,
   lng: 145.049784,
   address: '16-18 Cato Street, Hawthorn East VIC 3123'
 },
 {
   type: 'Bunnings',
   suburb: 'Wangaratta',
   state: 'VIC',
   lat: -36.365515,
   lng: 146.300309,
   address: '95-103 Tone Road, Wangaratta VIC 3677'
 },
 {
   type: 'Bunnings',
   suburb: 'Warragul',
   state: 'VIC',
   lat: -38.161766,
   lng: 145.934879,
   address: '9-12 June Court, Warragul VIC 3820'
 },
 {
   type: 'Bunnings',
   suburb: 'Warrnambool',
   state: 'VIC',
   lat: -38.3777,
   lng: 142.480446,
   address: 'Raglan Parade Cnr Horne Road, Warrnambool VIC 3280'
 },
 {
   type: 'Bunnings',
   suburb: 'Waurn Ponds',
   state: 'VIC',
   lat: -38.202732,
   lng: 144.306327,
   address: '237 Colac Road, Waurn Ponds VIC 3216'
 },
 {
   type: 'Bunnings',
   suburb: 'Werribee',
   state: 'VIC',
   lat: -37.899084,
   lng: 144.663821,
   address: '55 Cherry Street, Werribee VIC 3030'
 },
 {
   type: 'Bunnings',
   suburb: 'West Footscray',
   state: 'VIC',
   lat: -37.800414,
   lng: 144.870774,
   address: 'Geelong Road Cnr Geelong Street, West Footscray VIC 3012'
 },
 {
   type: 'Bunnings',
   suburb: 'Wodonga ',
   state: 'VIC',
   lat: -36.134809,
   lng: 146.905596,
   address: 'Anzac Parade Wodonga VIC 3690'
 },
 {
   type: 'Bunnings',
   suburb: 'Wonthaggi',
   state: 'VIC',
   lat: -38.603047,
   lng: 145.59299,
   address: '45-61 McKenzie Street, Wonthaggi VIC 3995'
 },
 {
   type: 'Bunnings',
   suburb: 'Yarrawonga',
   state: 'VIC',
   lat: -36.018402,
   lng: 146.002451,
   address: 'Kaelia Business Park Murray Valley Highway, Yarrawonga VIC 3730'
 },
 {
   type: 'Bunnings',
   suburb: 'Albany  NEW',
   state: 'WA',
   lat: -35.031075,
   lng: 117.89494,
   address: '162 Chester Pass Road Albany WA 6330'
 },
 {
   type: 'Bunnings',
   suburb: 'Armadale',
   state: 'WA',
   lat: -32.150071,
   lng: 116.006462,
   address: 'Ranford Road Cnr Armadale Rd, Armadale WA 6112'
 },
 {
   type: 'Bunnings',
   suburb: 'Australind',
   state: 'WA',
   lat: -33.281165,
   lng: 115.744913,
   address: '58 The Promenade, Australind WA 6233'
 },
 {
   type: 'Bunnings',
   suburb: 'Balcatta',
   state: 'WA',
   lat: -31.85972,
   lng: 115.81265,
   address: '191 Balcatta Road, Balcatta WA 6021'
 },
 {
   type: 'Bunnings',
   suburb: 'Baldivis ',
   state: 'WA',
   lat: -32.329599,
   lng: 115.812291,
   address: 'Cnr Baldivis Rd & Safety Bay Rd Baldivis WA 6171'
 },
 {
   type: 'Bunnings',
   suburb: 'Bayswater WA ',
   state: 'WA',
   lat: -31.918961,
   lng: 115.9181,
   address: '245 Collier Road Bayswater WA 6053'
 },
 {
   type: 'Bunnings',
   suburb: 'Belmont',
   state: 'WA',
   lat: -31.949728,
   lng: 115.931008,
   address: 'Alexander Road Cnr Abernethy Rd, Belmont WA 6104'
 },
 {
   type: 'Bunnings',
   suburb: 'Bibra Lake',
   state: 'WA',
   lat: -32.098451,
   lng: 115.817357,
   address: 'Spearwood Avenue Cnr Stock Rd, Bibra Lake WA 6163'
 },
 {
   type: 'Bunnings',
   suburb: 'Broome',
   state: 'WA',
   lat: -17.962931,
   lng: 122.231319,
   address: 'Hunter Street Cnr Blackman Street, Broome WA 6725'
 },
 {
   type: 'Bunnings',
   suburb: 'Bunbury',
   state: 'WA',
   lat: -33.327283,
   lng: 115.638324,
   address: 'Blair Street Cnr Mervyn, Bunbury WA 6230'
 },
 {
   type: 'Bunnings',
   suburb: 'Busselton',
   state: 'WA',
   lat: -33.655377,
   lng: 115.350089,
   address: 'Strelley Street Cnr Busselton Bypass, Busselton WA 6280'
 },
 {
   type: 'Bunnings',
   suburb: 'Cannington',
   state: 'WA',
   lat: -32.018795,
   lng: 115.933337,
   address: '1347 Albany Highway, Cannington WA 6107'
 },
 {
   type: 'Bunnings',
   suburb: 'Claremont',
   state: 'WA',
   lat: -31.982429,
   lng: 115.782315,
   address: '303 Stirling Highway, Claremont WA 6010'
 },
 {
   type: 'Bunnings',
   suburb: 'Cockburn Central ',
   state: 'WA',
   lat: -32.126271,
   lng: 115.868376,
   address: 'South Central, 71 Armadale Road Jandakot WA 6164'
 },
 {
   type: 'Bunnings',
   suburb: 'East Victoria Park',
   state: 'WA',
   lat: -31.988534,
   lng: 115.903655,
   address: '1010 Albany Highway, East Victoria Park WA 6101'
 },
 {
   type: 'Bunnings',
   suburb: 'Ellenbrook',
   state: 'WA',
   lat: -31.776862,
   lng: 115.96268,
   address: '173 The Promenade, Ellenbrook WA 6069'
 },
 {
   type: 'Bunnings',
   suburb: 'Esperance',
   state: 'WA',
   lat: -33.860243,
   lng: 121.888248,
   address: 'Norseman Road Cnr Arthur Street, Esperance WA 6450'
 },
 {
   type: 'Bunnings',
   suburb: 'Geraldton',
   state: 'WA',
   lat: -28.778088,
   lng: 114.61619,
   address: '181 North West Coastal Highway, Geraldton WA 6530'
 },
 {
   type: 'Bunnings',
   suburb: 'Halls Head',
   state: 'WA',
   lat: -32.547839,
   lng: 115.704389,
   address: '25 Rutland Drive, Halls Head WA 6210'
 },
 {
   type: 'Bunnings',
   suburb: 'Harrisdale',
   state: 'WA',
   lat: -32.116809,
   lng: 115.933459,
   address: 'Wright Road Cnr Ranford Rd, Harrisdale WA 6112'
 },
 {
   type: 'Bunnings',
   suburb: 'Subiaco',
   state: 'WA',
   lat: -31.942874,
   lng: 115.820985,
   address: '55 Salvado Road, Subiaco WA 6008'
 },
 {
   type: 'Bunnings',
   suburb: 'Innaloo',
   state: 'WA',
   lat: -31.89226,
   lng: 115.794064,
   address: 'Scarborough Beach Road Cnr Odin Rd, Innaloo WA 6018'
 },
 {
   type: 'Bunnings',
   suburb: 'Joondalup',
   state: 'WA',
   lat: -31.740925,
   lng: 115.771466,
   address: '9 Sundew Rise, Joondalup WA 6027'
 },
 {
   type: 'Bunnings',
   suburb: 'Kalamunda',
   state: 'WA',
   lat: -31.970862,
   lng: 116.057684,
   address: '30 Haynes Street, Kalamunda WA 6076'
 },
 {
   type: 'Bunnings',
   suburb: 'Kalgoorlie',
   state: 'WA',
   lat: -30.749867,
   lng: 121.478112,
   address: '139 Boulder Road, Kalgoorlie WA 6430'
 },
 {
   type: 'Bunnings',
   suburb: 'Maddington',
   state: 'WA',
   lat: -32.048303,
   lng: 115.996145,
   address: '1816-1828 Albany Highway Cnr Austin Ave, Maddington WA 6109'
 },
 {
   type: 'Bunnings',
   suburb: 'Malaga',
   state: 'WA',
   lat: -31.859024,
   lng: 115.889824,
   address: 'Malaga Drive Cnr Marshall Rd, Malaga WA 6090'
 },
 {
   type: 'Bunnings',
   suburb: 'Mandurah',
   state: 'WA',
   lat: -32.51048,
   lng: 115.74064,
   address: '7-11 Magenta Terrace, Mandurah WA 6210'
 },
 {
   type: 'Bunnings',
   suburb: 'Margaret River',
   state: 'WA',
   lat: -33.961487,
   lng: 115.071903,
   address: '8 Acer Place, Margaret River WA 6285'
 },
 {
   type: 'Bunnings',
   suburb: 'Melville',
   state: 'WA',
   lat: -32.04023,
   lng: 115.801158,
   address: '126 North Lake Road, Melville WA 6156'
 },
 {
   type: 'Bunnings',
   suburb: 'Midland',
   state: 'WA',
   lat: -31.89364,
   lng: 116.01828,
   address: '181 Great Eastern Highway, Midland WA 6056'
 },
 {
   type: 'Bunnings',
   suburb: 'Mindarie',
   state: 'WA',
   lat: -31.693269,
   lng: 115.722973,
   address: '22 Lower Keys Drive, Mindarie WA 6030'
 },
 {
   type: 'Bunnings',
   suburb: 'Northam  NEW',
   state: 'WA',
   lat: -31.653172,
   lng: 116.66542,
   address: 'Cnr Oliver Street & Peel Terrace Northam WA 6401'
 },
 {
   type: 'Bunnings',
   suburb: 'OConnor',
   state: 'WA',
   lat: -32.059071,
   lng: 115.790078,
   address: 'Yarrick Street Cnr South St, OConnor WA 6163'
 },
 {
   type: 'Bunnings',
   suburb: 'Osborne Park',
   state: 'WA',
   lat: -31.905534,
   lng: 115.814016,
   address: '46 Main Street, Osborne Park WA 6017'
 },
 {
   type: 'Bunnings',
   suburb: 'Port Kennedy',
   state: 'WA',
   lat: -32.375031,
   lng: 115.75212,
   address: 'Sunlight Drive Cnr Stockton Rd, Port Kennedy WA 6172'
 },
 {
   type: 'Bunnings',
   suburb: 'Rockingham',
   state: 'WA',
   lat: -32.285945,
   lng: 115.735023,
   address: 'Patterson Road Cnr Pedlar Cct, Rockingham WA 6168'
 },
 {
   type: 'Bunnings',
   suburb: 'WA State Office',
   state: 'WA',
   lat: -31.985997,
   lng: 115.946538,
   address: '126 Pilbara Street, Welshpool WA 6106'
 },
 {
   type: 'Bunnings',
   suburb: 'Wangara ',
   state: 'WA',
   lat: -31.80832,
   lng: 115.86884,
   address: '200 Hartman Drive Landsdale WA 6065'
 },
 {
   type: 'Bunnings',
   suburb: 'Willetton',
   state: 'WA',
   lat: -32.052716,
   lng: 115.887824,
   address: '135 High Road, Willetton WA 6155'
 }];
 export default stores;