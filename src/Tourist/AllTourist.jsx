import ShowTourist from "./ShortTourist"
import NavTourist from "./NavTourist"
import AllFooter from "../HomePage/Footer/AllFooter"
import { useEffect } from "react";
import MainTourist from "./MainTourist"
export default function AllTourist() {
    

    return (
        <>
            
            <div>
                <NavTourist/>

                <ShowTourist 
                 heading="GATEWAY OF INDIA"
                 

                 location="Location: Apollo Bandar, Colaba, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/gateway-of-india.jpg"

                 para=" Explore Mumbai's iconic GATEWAY OF INDIA, an architectural marvel that symbolizes the city's rich history. With its intricate design and stunning seafront location, it's the perfect blend of past and present, offering captivating photo opportunities and a vibrant atmosphere."

                 link="https://www.google.com/maps/place/Gateway+Of+India+Mumbai/@18.9219892,72.8320794,17z/data=!4m6!3m5!1s0x3be7d1c73a0d5cad:0xc70a25a7209c733c!8m2!3d18.9219841!4d72.8346543!16zL20vMDJoN3Iy?entry=ttu"
                 
                 website=""

                 category="Historical and Heritage sites"

                 webname="Gateway Of India"

                

                 />
                 <ShowTourist 
                 heading="ELEPHANTA CAVES"

                 location="Location: Gharapuri, Maharashtra"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/elephanta.png"

                 para="A short ferry ride from Mumbai, the Elephanta Caves on Elephanta Island showcase 5th-century rock-cut sculptures dedicated to Lord Shiva. Discover intricately carved caves and mythological depictions that highlight India’s ancient art and spirituality."

                 link="https://www.google.com/maps/place/Elephanta+Caves/@18.9643922,72.9171719,14.84z/data=!4m6!3m5!1s0x3be7c5307da3602f:0xf4ab181b1aaef53f!8m2!3d18.9633474!4d72.9314864!16zL20vMDIwcmI1?entry=ttu"
                 
                 website="https://elephanta.co.in/"

                 webname="Elephanta Caves"

                 category="Historical and heritage sites"


                 />

                 <ShowTourist 
                 heading="SIDDHIVINAYAK TEMPLE"
                 
                 location="Location: SK Bole Rd, Prabhadevi, Mumbai"

                 category="Category:Religious site"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/SIDDHIVINAYAK%20TEMPLE.jpg"

                 para="Find solace and seek blessings at Siddhivinayak Temple, where spirituality meets serenity. This sacred site houses a unique black stone idol of Lord Ganesha, believed to grant wishes and bring peace to its devotees."

                 link="https://www.google.com/maps/place/Shree+Siddhivinayak+Temple/@19.01699,72.8303997,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cec0d851ebc3:0xcc61876914526329!8m2!3d19.01699!4d72.8303997!16zL20vMDlxeGc1?entry=ttu"
                 
                 website="https://www.siddhivinayak.org/"

                 webname="Siddhivinayak Temple"

                 />

                 <ShowTourist 
                 heading="BANDRA WORLI SEA LINK"

                 location="Location: Bandra Worli Sea Link, Mount Mary, Bandra West, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/Bandra-Worli-Sea-Link.webp"

                 para="Embark on a mesmerizing journey across the Bandra-Worli Sea Link, an engineering marvel that seamlessly connects Mumbai's suburbs. As you traverse this cable-stayed bridge, prepare to be captivated by the awe-inspiring views of the Arabian Sea and the city's glittering skyline."

                 link="https://www.google.com/maps/place/Bandra+-+Worli+Sea+Link,+Mount+Mary,+Bandra+West,+Mumbai,+Maharashtra/@19.0425459,72.8205325,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ceb3b002576f:0xf51617363a2f6536!8m2!3d19.0425408!4d72.8231074!16s%2Fg%2F11cfmj34c?entry=ttu"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="MARINE DRIVE"

                 location="Location: The Netaji Subhash Chandra Bose Road"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/marine-drive.avif"

                 para="Mumbai's Marine Drive is an iconic seafront promenade, known for its distinctive crescent shape and glittering cityscape views. Often called the Queen's Necklace when lit up at night, it's a beloved spot for leisurely walks and enjoying breathtaking sunsets."

                 link="https://www.google.com/maps/place/Marine+Dr,+Mumbai/@18.9432161,72.8181274,17z/data=!3m1!4b1!4m10!1m2!2m1!1s+the+Netaji+Subhash+Chandra+Bose+Road+in+Mumbai,+India!3m6!1s0x3be7d1e25ee8439d:0x5acd924f2726ad2b!8m2!3d18.9432111!4d72.8229983!15sCjV0aGUgTmV0YWppIFN1Ymhhc2ggQ2hhbmRyYSBCb3NlIFJvYWQgaW4gTXVtYmFpLCBJbmRpYZIBBXRyYWls4AEA!16zL20vMDM1Nnls?entry=ttu"
                 
                 website=""

                 webname=""

                 
                 />

                <ShowTourist 
                 heading="BANDRA BANDSTAND"

                 location="Location: Bandstand Promenade Bandra West, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/bandra-bandstand-mumbai-indian-tourism-one-day-city-tour.jpg"

                 para=" Experience the romance of Mumbai at Bandra Bandstand, a picturesque seaside promenade that overlooks the Arabian Sea. As you take in the breathtaking views, you'll also feel the enchanting charm of Bollywood, making it a perfect spot for leisurely strolls and beautiful sunsets."

                 link="https://www.google.com/maps/place/Bandstand+Promenade,+Bandra+West,+Mumbai,+400050/@19.0516755,72.8195135,18.2z/data=!4m6!3m5!1s0x3be7c94404368f7b:0xc4c0b741715907db!8m2!3d19.050516!4d72.8213832!16zL20vMDd4dGpj?entry=ttu"
                 
                 website=""

                 webname=""

                 />
                  <ShowTourist 
                 heading="CHHATRAPATI SHIVAJI MAHARAJ VASTU SANGHRALAYA"

                 location="Location: 159-161, Mahatma Gandhi Road, Kala Ghoda, Fort, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/CHHATRAPATI%20SHIVAJI%20MAHARAJ%20VASTU%20SANGHRALAYA.jpg"

                 para="Formerly known as the Prince of Wales Museum, this Mumbai institution is a treasure trove of art and history. Its impressive collection includes sculptures, decorative arts, and artifacts from India and beyond. "

                 link="https://www.google.com/maps/place/Chhatrapati+Shivaji+Maharaj+Vastu+Sangrahalaya/@18.9266744,72.8319741,19z/data=!4m15!1m8!3m7!1s0x3be7d1c3e95e82e7:0x4def27e4efa8253e!2s159-161,+Mahatma+Gandhi+Road,+Kala+Ghoda,+Fort,+Mumbai,+Maharashtra+400023!3b1!8m2!3d18.9266522!4d72.832459!16s%2Fg%2F11c45z791p!3m5!1s0x3be7d1c3eaf8b127:0x44e72610553e9253!8m2!3d18.9269015!4d72.8326916!16zL20vMDIweHFq?entry=ttu"

                 category="Historical and heritage sites"
                 
                 website="https://csmvs.in/"

                 webname="Chhatrapati Shivaji Maharaj Vastu Sanghralaya"

                 />

                  <ShowTourist 
                 heading="NEHRU PLANETARIUM"

                 location="Location: Nehru Centre, Dr Annie Besant Rd, Lotus Colony, Worli"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/NEHRU%20PLANETARIUM.jpg"

                 para="Explore the wonders of the cosmos at the Nehru Planetarium in Mumbai. This interactive space science center offers captivating astronomy shows, celestial observations, and educational programs. "

                 link="https://www.google.com/maps/place/Nehru+planetarium/@18.9888888,72.8123317,17z/data=!3m1!4b1!4m6!3m5!1s0x3bd3665787c4ee6d:0xcba9fe91bf3fc50c!8m2!3d18.9888837!4d72.8149066!16s%2Fg%2F1vhq256k?entry=ttu"
                 
                 website="https://www.nehrucentremumbai.in/"

                 webname="Nehru Planeterium"

                  
                 />
                  <ShowTourist 
                 heading="NEHRU CENTRE"

                 location="Location: Nehru Centre, Dr Annie Besant Rd, Lotus Colony, Worli"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/NEHRU%20CENTRE.jpg"

                 para="The Nehru Center in Mumbai is a cultural hub dedicated to promoting art, science, and culture. Named after India's first Prime Minister, Jawaharlal Nehru, it hosts art exhibitions, cultural performances, educational events, and lectures.  "

                 link="https://www.google.com/maps/place/Nehru+Centre+Auditorium+Worli/@18.9888327,72.8124801,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf229516299f:0x6367e9a70eb0032a!8m2!3d18.9888276!4d72.815055!16s%2Fg%2F11t5y7mlq1?entry=ttu"
                 
                 website="https://www.nehrucentremumbai.in/"

                 webname="Nehru Centre"

                 />
                  <ShowTourist 
                 heading="TARAPOREVALA AQUARIUM"

                 location="Location: Netaji Subhash Chandra Bose Road, Marine Drive, near Charni Road "

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/TARAPOREVALA%20AQUARIUMjpg.jpg"

                 para=" Dive into the wonders of marine life at Mumbai's Taraporewala Aquarium. Home to a diverse collection of aquatic species, including colorful fish, sharks, and turtles, this aquarium offers an educational and visually captivating experience."

                 link="https://www.google.com/maps/place/Taraporevala+Aquarium/@18.9492639,72.8174553,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce1bbc806f01:0x2ec42768fb318cb7!8m2!3d18.9492588!4d72.8200302!16s%2Fm%2F02qr9m4?entry=ttu"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="DR.BHAU DAJI LAD MUSEUM"

                 location="Location: Dr Baba Saheb Ambedkar Rd, Byculla East, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/DR.BHAU%20DAJI%20LAD%20MUSEUM.jpg"

                 para=" Discover Mumbai's heritage at this museum, housed in a beautifully restored 19th-century building. Explore a fascinating collection of art, artifacts, and exhibits that highlight the city's history and culture. "

                 link="https://www.google.com/maps/place/Dr.+Bhau+Daji+Lad+Museum/@18.978994,72.8322404,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce5b428e70af:0x79efde6c140c2e05!8m2!3d18.9789889!4d72.8348153!16s%2Fm%2F06w4mwg?entry=ttu"
                 
                 website="https://www.bdlmuseum.org/"

                 webname="DR. Bhau Daji Lad Museum"

                 />
                 
                 <ShowTourist 
                 heading="MANI BHAVAN"

                 location="Location: Mani Bhavan, 19, Laburnum Rd, Babulnath, Gamdevi, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/mani-bhavan.jpg"

                 para="Immerse yourself in history at Mani Bhavan, once Mahatma Gandhi's residence and now a captivating museum. Walk in the footsteps of the Mahatma and explore the exhibits and photographs that offer profound insights into his life and the Indian freedom struggle."

                 link="https://www.google.com/maps/place/Mani+Bhavan+Gandhi+Sangrahalaya/@18.9597717,72.8089949,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce0c69115555:0xc0b175f791f839fd!8m2!3d18.9597666!4d72.8115698!16zL20vMGI4M3Qx?entry=ttuu"
                 
                 category="Historical and heritage sites"
                 
                 website="https://www.gandhi-manibhavan.org/"

                 webname="Mani Bhavan"

                 />
                 
                 <ShowTourist 
                 heading="RANI BAUG"

                 location="Location: Railway Station, 91A, Lalbaug Flyover, near Byculla, Byculla East, Byculla, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/RANI%20BAUG.jpg"

                 para=" Step into tranquility at Rani Baug, often called Victoria Gardens, nestled in the heart of bustling Mumbai. Dating back to the 1860s, this historic botanical garden is a haven of greenery and peace. "

                 link="https://www.google.com/maps/place/Veermata+Jijabai+Bhosale+Udyan+And+Zoo/@18.9787151,72.8325462,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce36ee34d0a1:0x623099a68d41b780!8m2!3d18.97871!4d72.8351211!16zL20vMDIwcjk0?entry=ttu"
                 
                 website="https://www.piramalaranya.com/rani-baug-byculla/"

                 webname="Rani Baug"

                 />

                 <ShowTourist 
                 heading="BOOT HOUSE"

                 location="Location: Ridge Rd, Simla Nagar, Malabar Hill, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/BOOT%20HOUSE.webp"

                 para=" The Boot House, located in Mumbai, is a unique architectural marvel shaped like a giant boot. Originally built as a tribute to a British officer's love for his wife, it now houses a shoe store."

                 link="https://www.google.com/maps/place/Hanging+Gardens/@18.956537,72.8049527,17z/data=!4m15!1m8!3m7!1s0x3be7ce09e53e749f:0x94a70633cf948b9a!2sHanging+Gardens!8m2!3d18.9565598!4d72.8049866!10e5!16zL20vMDIwcDlw!3m5!1s0x3be7ce09e53e749f:0x94a70633cf948b9a!8m2!3d18.9565598!4d72.8049866!16zL20vMDIwcDlw?entry=ttu"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="FILM CITY"

                 location="Location: Film City Rd, Film City Complex, Aarey Colony, Goregaon, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/FILM%20CITY.avif"

                 para="Explore the heart of India's film industry at Mumbai's Film City. This sprawling studio complex is where Bollywood magic comes to life. Guided tours offer a glimpse behind the scenes, where you might spot film sets, stars, and crew at work. "

                 link="https://www.google.com/maps/place/Dadasaheb+Phalke+Chitranagari/@19.1607967,72.8850306,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b78e073c60f3:0x5902e0f75253a72b!8m2!3d19.1607917!4d72.8876055!16s%2Fm%2F04n489p?entry=ttu"
                 
                 website="https://www.filmcitymumbai.org/"

                 webname="Film City"

                 />

                 <ShowTourist 
                 heading="CHOWPATTY VIEW DECK"

                 location="Location: Chowpatty, Girgaon, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/CHOWPATTY%20VIEW%20DECK.jpeg"

                 para=" Experience breathtaking views of Mumbai's Girgaum Chowpatty beach from the Chowpatty View Deck. This elevated vantage point offers a captivating perspective of the Arabian Sea and the lively shoreline. "

                 link="https://www.google.com/maps/place/Girgaon+Chowpatty+Viewing+Deck/@18.9548232,72.8055365,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cf22fb44ca23:0xd9de59061eebb2a6!8m2!3d18.9548181!4d72.8081114!16s%2Fg%2F11sxwth1l6?entry=ttu"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="MAHALAXMI RACE TRACK"

                 location="Location: Keshavrao Khadye Marg, Royal Western India Turf Club, Mahalakshmi, Mumbai"

                 img="https://raw.githubusercontent.com/pratik907-web/image-hosting1/refs/heads/main/MAHALAXMI%20RACE%20TRACK.jpg"

                 para=" Experience the excitement of horse racing in Mumbai at the prestigious Mahalaxmi Race Course. Set against lush green surroundings, it offers thrilling equestrian action and a vibrant social atmosphere."

                 link="https://www.google.com/maps/place/Mahalakshmi+Race+Course/@18.984214,72.8175004,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce63d14b3d83:0xb6ce08c6304dcc32!8m2!3d18.9842089!4d72.8200753!16zL20vMDVmNzNt?entry=ttu"
                 
                 website="https://www.piramalmahalaxmi.com/mahalaxmi-racecourse/"

                 webname="Mahalaxmi Race Course"

                 />

                 {/* entering my data from here */}

                 {/* Religious and cultural sites */}

                 <ShowTourist 
                 heading="Mumba Devi Temple"

                 location="Location:Mumba Devi Mandir, Zaveri Bazaar, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/mumba%20devi%20mandir.jpg"

                 para="The Mumba Devi Temple, located in Zaveri Bazaar, Mumbai, is dedicated to Goddess Mumba, the city's patron deity. It is one of the oldest temples in Mumbai, known for its intricate architecture and religious significance to the city's residents."

                 link="https://www.google.com/maps/place/Shri+Mumbadevi+Temple,+Mumbai/@18.9519401,72.8281687,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cfecc763321b:0x9853129a582225b2!8m2!3d18.9519401!4d72.8307436!16zL20vMDN3aGpk?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname="Mumba Devi Temple"

                 />

                 <ShowTourist 
                 heading="Mahalakshmi Temple"

                 location="Location:Bhulabhai Desai Marg, Mahalaxmi West,Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/mahalaxmitemple.jpg"

                 para="The Mahalakshmi Temple, located in Mahalakshmi, Mumbai, is dedicated to Goddess Mahalakshmi, the goddess of wealth, fortune, and prosperity. It is one of the most prominent temples in Mumbai, known for its stunning architecture and religious significance to the city's residents."

                 link="https://www.google.com/maps/place/Shri+Mahalakshmi+Devi+Temple,+Mumbai/@18.9773405,72.8065601,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce6ce5383ed1:0xe20c7a512463dd62!8m2!3d18.9773405!4d72.8065601!16zL20vMDQyeTRi?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="ISKCON TEMPLE"

                 location="Location:Hare Krishna Land, Sri Mukteshwar Devalaya Rd,Juhu, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/ISKCON%20TEMPLE(JUHU).jpg"

                 para="The ISKCON Temple, located in Juhu, Mumbai, is dedicated to Lord Krishna and is a major spiritual center. It is one of the most famous temples in Mumbai, known for its vibrant atmosphere, beautiful architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/ISKCON+Temple,+Juhu,+Mumbai/@19.113016,72.8240011,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9e83c34362f:0x6d7c69d4f830e48!8m2!3d19.113016!4d72.826576!16s%2Fg%2F1td08dd5?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Babulnath temple"

                 location="Location: Babulnath Rd,Babulnath,Khareghat Colony Gamdevi, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/Babulnath-Temple-20.jpg"

                 para="The Babulnath Temple, located in Girgaon, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the oldest temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/ISKCON+Temple,+Juhu,+Mumbai/@19.113016,72.8240011,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c9e83c34362f:0x6d7c69d4f830e48!8m2!3d19.113016!4d72.826576!16s%2Fg%2F1td08dd5?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />




                 <ShowTourist 
                 heading="Shri Swaminarayan Mandir"

                 location="Location: Dadar East, Dadar, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/BAPS-Shri-Swaminarayan-Mandir--scaled.jpg"

                 para="The Shri Swaminarayan Mandir, located in Dadar, Mumbai, is dedicated to Lord Swaminarayan and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/BAPS+Shri+Swaminarayan+Mandir,+Mumbai/@19.0018527,72.8056703,14z/data=!4m10!1m2!2m1!1sShri+Swaminarayan+Mandir+dadar!3m6!1s0x3be7cedc138e7e5f:0x916b68999fb77b7c!8m2!3d19.0177255!4d72.8443667!15sCh5TaHJpIFN3YW1pbmFyYXlhbiBNYW5kaXIgZGFkYXJaICIec2hyaSBzd2FtaW5hcmF5YW4gbWFuZGlyIGRhZGFykgEMaGluZHVfdGVtcGxl4AEA!16s%2Fg%2F1tf063xb?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Hanuman Mandir"

                 location="Location: Dadar East, Dadar, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/hanuman%20mandir.jpg"

                 para="The Hanuman Mandir, located near Marine Lines, Mumbai, is dedicated to Lord Hanuman and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shree+rokadiya+Hanuman+Mandir/@19.0017968,72.7438677,12z/data=!3m1!5s0x3be7ce20551c7ec9:0x42589a7966ff9ba7!4m10!1m2!2m1!1sHanuman+Mandirnear+marine+lines+mumbai+!3m6!1s0x3be7ce21ab27d9f9:0x6b33c7db42cce22a!8m2!3d18.9454343!4d72.8306611!15sCidIYW51bWFuIE1hbmRpciBOZWFyIG1hcmluZSBsaW5lcyBtdW1iYWmSAQxoaW5kdV90ZW1wbGXgAQA!16s%2Fg%2F12q4vc5g2?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />




                 <ShowTourist 
                 heading="Shiv Temple"

                 location="Location:Ambernath Prakash Nagar Shiv Mandir road, 421, 501 East, Ambernath"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/Ambernath%20shiv%20mandir.jpg"

                 para="The Shiv Mandir, located in Ambarnath, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shree+rokadiya+Hanuman+Mandir/@19.0017968,72.7438677,12z/data=!3m1!5s0x3be7ce20551c7ec9:0x42589a7966ff9ba7!4m10!1m2!2m1!1sHanuman+Mandirnear+marine+lines+mumbai+!3m6!1s0x3be7ce21ab27d9f9:0x6b33c7db42cce22a!8m2!3d18.9454343!4d72.8306611!15sCidIYW51bWFuIE1hbmRpciBOZWFyIG1hcmluZSBsaW5lcyBtdW1iYWmSAQxoaW5kdV90ZW1wbGXgAQA!16s%2Fg%2F12q4vc5g2?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="Mount Mary Church"

                 location="Location:Mount Mary Rd,near Shanti Avedna Sadan,Mount Mary,Bandra West, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/mountmerry%20church.jpg"

                 para="The Mount Mary Church, located in Bandra, Mumbai, is dedicated to Mother Mary and is an important religious site. It is one of the most revered churches in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Basilica+of+Our+Lady+of+the+Mount+(Mount+St+Mary+Church)/@19.0462495,72.8186506,16z/data=!4m10!1m2!2m1!1sMount+Mary+Church!3m6!1s0x3be7c9409a609d75:0xd0a71c45e7557bfa!8m2!3d19.0465581!4d72.8224747!15sChFNb3VudCBNYXJ5IENodXJjaFoTIhFtb3VudCBtYXJ5IGNodXJjaJIBCGJhc2lsaWNh4AEA!16zL20vMDJ5NGJz?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 
                <ShowTourist 
                 heading="Haji Ali Dargah"

                 location="Location:Dargah Rd, Haji Ali, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/hajialidargah.jpg"

                 para="The Haji Ali Dargah, located in Worli, Mumbai, is dedicated to Pir Haji Ali Shah Bukhari and is an important religious site. It is one of the most revered dargahs in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Haji+Ali+Dargah,+Dargah+Rd,+Haji+Ali,+Mumbai,+Maharashtra/@18.9827097,72.806298,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce7e9373f579:0x85949a815a35b155!8m2!3d18.9828192!4d72.8088962!16s%2Fg%2F11hc7rgzfb?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                <ShowTourist 
                 heading="Walkeshwar Temple"

                 location="Location:Banganga Cross Ln, Teen Batti, Malabar Hill, Mumbai"

                 img="https://raw.githubusercontent.com/SahilPagare18/Navizit/refs/heads/main/src/images/walkeshwar-temple-mumbai.jpg"

                 para="The Walkeshwar Temple, located in Malabar Hill, Mumbai, is dedicated to Lord Shiva and is an important religious site. It is one of the most revered temples in Mumbai, known for its serene atmosphere, stunning architecture, and religious significance to the city's devotees."

                 link="https://www.google.com/maps/place/Shri+Walkeshwar+Temple,+Mumbai/@18.9456144,72.7906177,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7cdf9899a8b5b:0xcbbe7589ec985cdc!8m2!3d18.9456144!4d72.7931926!16zL20vMDViZDRs?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Religious site"
                 
                 website=""

                 webname=""

                 />

                 {/* Historical and heritage sites */}
                 <ShowTourist 
                 heading="Canheri Caves"

                 location="Location:Mumbai, Maharashtra 400101"

                 img="https://www.holidify.com/images/cmsuploads/compressed/1034_20190405125926.jpg"

                 para="The Kanheri Caves, located in Sanjay Gandhi National Park, Mumbai, are an important historical and religious site. These ancient rock-cut caves, dating back to the 1st century BCE, are known for their serene atmosphere, intricate Buddhist carvings, and stunning architecture. They hold great significance as a center of Buddhist learning and meditation, attracting devotees and history enthusiasts from across the city.."

                 link="https://www.google.com/maps/place/Kanheri+Caves/@19.2058464,72.8678814,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7b9e6e2b92f91:0xbf74be4bdbb53955!8m2!3d19.2058509!4d72.9068504!16s%2Fg%2F11v9m1r0tt?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D."

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Bombay High Court"

                 location="Location:The Registrar General, Bombay High Court, Fort, Mumbai"

                 img="https://cdnbbsr.s3waas.gov.in/s388ef51f0bf911e452e8dbb1d807a81ab/uploads/2020/12/2020123069.jpg"

                 para="The Bombay High Court, located in Mumbai, is an important historical and judicial landmark. This iconic colonial-era building, dating back to the 19th century, is known for its grand Gothic architecture, intricate detailing, and significant role in India's legal system. It holds great importance as one of the oldest high courts in the country, serving as a center of justice and governance, attracting legal professionals, historians, and architecture enthusiasts from across the city."

                 link="https://www.google.com/maps/place/Kanheri+Caves/@19.2058464,72.8678814,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7b9e6e2b92f91:0xbf74be4bdbb53955!8m2!3d19.2058509!4d72.9068504!16s%2Fg%2F11v9m1r0tt?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D."

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 />

                 <ShowTourist 
                 heading="Asiatic Society Library"

                 location="Location:WRJP+P8M, Town Hall, Shahid Bhagat Singh Rd, Fort, Mumbai"

                 img="https://imgstaticcontent.lbb.in/lbbnew/wp-content/uploads/sites/7/2017/01/180117_asiaticlibrary01.jpg"

                 para="The Bombay High Court, located in Mumbai, is an important historical and judicial landmark. This iconic colonial-era building, dating back to the 19th century, is known for its grand Gothic architecture and significant role in India's legal system. It holds great importance as one of the oldest high courts in the country, serving as a center of justice and governance."

                 link="https://www.google.com/maps/place/The+Asiatic+Society,+Mumbai/@18.9318486,72.8332247,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1db2d1680df:0x2ce4015ac112d3f9!8m2!3d18.9318486!4d72.8357996!16zL20vMDU0eXQx?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 /> 
               
 
                 <ShowTourist 
                 heading="Kotachi Wadi"

                 location="Location:Kotachi Wadi,Girgaon Mumbai"

                 img="  https://assets.architecturaldigest.in/photos/60e2a2240e8686d95b697a68/master/w_1600%2Cc_limit/In%252520the%252520heart%252520of%252520South%252520Mumbai%2C%252520this%252520quaint%252520urban%252520village%252520Khotachiwadi%252520features%252520the%252520best%252520there%252520is%2525208.jpg"

                 para="Khotachiwadi is a heritage village in Girgaon, Mumbai, India. Houses generally conform to the old-Portuguese style architecture. It was founded in the late 18th century by Khot, a Pathare prabhu, who sold plots of land to local East Indian families"

                 link="https://www.google.com/maps/place/Kotachi+Wadi,+Girgaon,+Mumbai,+Maharashtra+400004/@18.9555129,72.8193896,18z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce10dd1a49d3:0x418f66cf8cb0abd8!8m2!3d18.9556405!4d72.820307!16zL20vMDZ3OHNs?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 /> 

                <ShowTourist 
                 heading="Global Vipassana Pagoda"

                 location="Location:Essel world Amusement Park, Bhayandar West, Mira Bhayandar, Mumbai"

                 img="https://www.godigit.com/content/dam/godigit/directportal/en/contenthm/global-vipassana-pagoda.jpg"

                 para="The Global Vipassana Pagoda is a prominent spiritual site in Gorai, Mumbai, India, known for its grand, modern architecture. Built in the early 21st century under S.N. Goenka’s guidance, it serves as a center for Vipassana meditation and promotes peace. The pagoda’s immense dome is one of the largest stone structures of its kind, symbolizing the global spread of Vipassana."

                 link="https://www.google.com/maps/place/Kotachi+Wadi,+Girgaon,+Mumbai,+Maharashtra+400004/@18.9555129,72.8193896,18z/data=!3m1!4b1!4m6!3m5!1s0x3be7ce10dd1a49d3:0x418f66cf8cb0abd8!8m2!3d18.9556405!4d72.820307!16zL20vMDZ3OHNs?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"

                 category="Historical and heritage sites"
                 
                 website=""

                 webname=""

                 /> 
                <ShowTourist
          heading="Kanheri Caves Trail"
          location="Location:Sanjay Gandhi National Park Borivli East, Mumbai India"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/khanheri1.jpg"
          para="Located within Sanjay Gandhi National Park in Borivali, Mumbai, this trail leads to the ancient Kanheri Caves. The path offers a moderate hike through lush greenery, culminating in a visit to the historic Buddhist cave complex"
          link="https://www.google.com/maps/place/Kanheri+Caves/@19.2078654,72.9022322,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b9e6e177d16d:0xf5677ab36922b95f!8m2!3d19.2078604!4d72.9048071!16zL20vMDNmbTZu?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Shilonda Trail"
          location="Location:Sanjay Gandhi National Park Borivli East, Mumbai India"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/Shilonda-trail.jpg"
          para="Also situated in Sanjay Gandhi National Park, the Shilonda Trail is a gentle walk through dense forests and across streams, ending at the park's farthest point. It's ideal for nature enthusiasts and bird watchers."
          link="https://www.google.com/maps/place/Shilonda+Trail/@19.2275159,72.8791486,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b0b38c448295:0xde4057ced6f30603!8m2!3d19.2275109!4d72.8817235!16s%2Fg%2F11c32dtf0s?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Yeoor Hills"
          location="Location:Thane, Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/Yeoor-Hills-Thane-_-Must-Visit-Place-in-Thane.png"
          para="Located at the back end of Sanjay Gandhi National Park in Thane, Yeoor Hills offers a relatively easy trek. The trail provides panoramic views of the park and Thane city, with opportunities to encounter local flora and fauna."
          link="https://www.google.com/maps/place/Yeoor+Hills,+Thane+West,+Thane,+Maharashtra/@19.2319288,72.9246263,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7ba2ada5d5f83:0xee246ee0cdac06eb!8m2!3d19.233765!4d72.9445802!16s%2Fg%2F12hqh8jns?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Chinchoti Trail"
          location="Location:Chinchoti Waterfall, Vasai, Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/chinchoti.jpg"
          para="Situated near Vasai, the Chinchoti Trail leads hikers through villages, across streams, and through dense vegetation to the Chinchoti Waterfalls. The area is especially popular during the monsoon season. 
"
          link="https://www.google.com/maps/place/Chinchoti+Waterfalls/@19.4142526,72.9170098,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7a60b6b40b4c5:0x64bba690c94e8da7!8m2!3d19.4142476!4d72.9195847!16s%2Fg%2F11h09v5j8?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Tungareshwar Trail"
          location="Location: plateau east of Vasai and Virar in Palghar district"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/Tungareshwar-Trail_d.webp"
          para="Located in Vasai, the Tungareshwar Wildlife Sanctuary offers multiple trekking routes. One can trek up to the Shiva Temple, proceed to the Balayogi Ashram, or venture further to the Vajreshwari Springs. The sanctuary is rich in biodiversity, making it a haven for nature lovers."
          link="https://www.google.com/maps/place/Tungareshwar+Rd,+Maharashtra/@19.4364252,72.9151622,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7a646c2a7a053:0xa1dde76a8a7f3b7c!8m2!3d19.4364202!4d72.9177371!16s%2Fg%2F1tlqng0k?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Peb Fort (Vikatgad) Trail"
          location="Location:Karjat,Raigad district of Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/Vikatgad-Peb-Fort.jpg"
          para="Near Neral, the trek to Peb Fort involves navigating through forests, crossing small streams, and ascending rocky patches. The fort offers panoramic views of the surrounding region and is a moderate-level trek suitable for enthusiasts looking for a bit of a challenge. "
          link="https://www.google.com/maps/search/Peb+Fort+(Vikatgad)+Trail/@19.0216464,73.2760817,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Garbett Point Trail"
          location="Location:Diksal village,Karjat"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/Beautiful-dam-at-Garbett-Point-Trek-initial-trail.webp"
          para="Starting from Diksal village near Matheran, this trail offers a challenging trek with steep ascents. Trekkers are rewarded with breathtaking views of the plateau and the surrounding landscapes."
          link="https://www.google.com/maps/search/Garbett+Point+Trail/@18.9895151,73.2490689,13.24z?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Matheran"
          location="Location:Karjat,Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/matheran.jpg"
          para="A quaint hill station located approximately 90 km from Mumbai, Matheran offers several trekking routes, including the popular Sunset Point and One Tree Hill trails. Notably, Matheran is an automobile-free zone, ensuring a peaceful environment for hikers."
          link="https://www.google.com/maps/place/Matheran,+Maharashtra/@18.9902797,73.2317061,13z/data=!3m1!4b1!4m6!3m5!1s0x3be7e5566af9569b:0x56bade96248a07e6!8m2!3d18.9886587!4d73.271179!16zL20vMDRrZHhq?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Mahuli Fort"
          location=" Location:Asangaon,Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/mahuli.jpg"
          para="Situated near Asangaon, Mahuli Fort stands at 2,815 feet and is a favored spot for trekkers and rock climbers. The trek involves navigating through dense forests and rocky terrains, leading to the historic fort that offers panoramic views of the surrounding area."
          link="https://www.google.com/maps/place/Mahuli+Fort/@19.4910687,73.2451817,17z/data=!3m1!4b1!4m6!3m5!1s0x3be79ce5e53151cd:0x2b3f765729d3ad51!8m2!3d19.4910637!4d73.2500526!16s%2Fg%2F11cnrdr5k7?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Kalsubai Peak"
          location="Location:Ahmednagar district, Kalsubai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/amazing-landscape-view-Kalsubai-highest-peak-of-Maharashtra.webp"
          para="Located in the Ahmednagar district, Kalsubai Peak is the highest point in Maharashtra at 1,646 meters. The trek is moderately challenging, with well-designated routes and ladders to assist climbers. The summit offers stunning views of the surrounding Sahyadri ranges."
          link="https://www.google.com/maps/place/Kalsubai+Peak/@19.6012481,73.698852,15z/data=!3m1!4b1!4m6!3m5!1s0x3bdd9da29a349bb1:0xd763db58ee98a373!8m2!3d19.6012285!4d73.7091518!16zL20vMDN2ejk4?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Lohagad Fort Trek"
          location="Location:Lonavala Khandala,Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/Lohagad-Fort.jpg"
          para="Approximately 100 km from Mumbai, this UNESCO World Heritage site is ideal for beginners. The trail is well-defined, leading to a fort that offers stunning views, especially during the monsoon season. 
"
          link="https://www.google.com/maps/place/Lohagad+Fort,+Lohagad+Trek+Rd,+Maharashtra+410406/@18.7101996,73.4732869,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2a9e5ec73dc55:0x40175d3a5814b5d!8m2!3d18.7101945!4d73.4758618!16zL20vMGY2eTlf?entry=ttu&g_ep=EgoyMDI1MDIxMi4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Mountain & Hiking Destinations"
        />
        <ShowTourist
          heading="Sanjay Gandhi National Park"
          location="Location:Borivali, Mumbai, Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/Sanjay-Gandhi-Lion-Safari.webp"
          para="Sanjay Gandhi National Park is one of the most significant urban wildlife reserves in the world. Covering 103 sq km, it is home to a variety of wildlife, including leopards, spotted deer, sambar deer, black-naped hares, langurs, and over 270 species of birds. The park also has the Kanheri Caves, a group of ancient Buddhist caves dating back to the 1st century BCE."
          link="https://www.google.com/maps/place/Sanjay+Gandhi+National+Park/@19.2204585,72.9102673,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b0c88b1d3d9f:0x3621dd69daa8e2cf!8m2!3d19.2204535!4d72.9128422!16zL20vMDNmYzBr?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website="https://sgnp.maharashtra.gov.in/Site/Home/Index.aspx"
          webname=""
          category="Wildlife Reserves & Sanctuaries"
        />
        <ShowTourist
          heading="Karnala Bird Sanctuary"
          location="Location:Panvel, Navi Mumbai, Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/karnala-1.png"
          para="Karnala Bird Sanctuary is a small yet rich wildlife reserve, primarily known for its bird diversity. More than 150 resident bird species and 37 migratory species have been recorded here. It is also home to wild boars, monkeys, and small mammals. The sanctuary is famous for the Karnala Fort, a hilltop fort that provides breathtaking views of the surrounding region."
          link="https://www.google.com/maps/place/Karnala+Bird+Sanctuary/@18.8933513,73.1102928,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7e74786430a17:0xff3d39e03140a0d8!8m2!3d18.8933462!4d73.1128677!16zL20vMDJ5anQz?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Wildlife Reserves & Sanctuaries"
        />
        <ShowTourist
          heading="Aarey Forest (Aarey Milk Colony)"
          location="Location:Goregaon, Mumbai, Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/aarey-colony-raod-octt_d.webp"
          para="Aarey Forest, part of the Sanjay Gandhi National Park ecosystem, is a green zone within Mumbai that supports a variety of flora and fauna, including leopards, deer, and over 80 species of birds. The area is a vital lung space for Mumbai and is known for its scenic beauty, making it a popular spot for nature lovers, joggers, and cyclists."
          link="https://www.google.com/maps/place/Aarey+Colony,+Goregaon,+Mumbai,+Maharashtra/@19.1531648,72.8585924,14z/data=!3m1!4b1!4m6!3m5!1s0x3be7b7ea97555043:0xedc3ab3e5ae395c3!8m2!3d19.1509655!4d72.8831294!16zL20vMDZzczJo?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Wildlife Reserves & Sanctuaries"
        />
        <ShowTourist
          heading="Maharashtra Nature Park"
          location="Location:Dharavi, Mumbai, Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/mahim.webp"
          para="Mahim Nature Park (MNP) is a man-made urban forest created on reclaimed land along the Mithi River. It has over 14,000 trees, 120 bird species, butterflies, and reptiles. It is an excellent place for environmental education, birdwatching, and eco-tours."
          link="https://www.google.com/maps/place/Maharashtra+Nature+Park/@19.0522634,72.8601892,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7c8db1a3e0c31:0xb4cdb3e0a75044c0!8m2!3d19.0522583!4d72.8627641!16s%2Fg%2F1tlbh0md?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Wildlife Reserves & Sanctuaries"
        />
        <ShowTourist
          heading="Coastal and Mangrove Forests (Mumbai Mangroves)"
          location="Location: Along Mumbai’s coastline (Versova, Malad, Vikhroli, Thane Creek)"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/roots-mangrove-trees-Tha-Pom-Khlong-Song.webp"
          para="Mumbai has extensive mangrove forests, which act as natural buffers against floods and support a diverse ecosystem. These mangroves provide shelter to birds, crabs, reptiles, and marine life. The Thane Creek Flamingo Sanctuary is a famous spot where thousands of flamingos migrate every winter."
          link="hhtthttps://www.google.com/maps/place/Coastal+%26+Marine+Biodiversity+Centre,+Diva+koliwada/@19.1483522,72.9827614,18z/data=!4m10!1m2!2m1!1s+Coastal+and+Mangrove+Forests++Along+Mumbai%E2%80%99s+coastline+(Versova,+Malad,+Vikhroli,+Thane+Creek)!3m6!1s0x3be7b8ae96b690bd:0xe55d0cbc7fa4ddc3!8m2!3d19.148924!4d72.986362!15sCmBDb2FzdGFsIGFuZCBNYW5ncm92ZSBGb3Jlc3RzICBBbG9uZyBNdW1iYWnigJlzIGNvYXN0bGluZSAoVmVyc292YSwgTWFsYWQsIFZpa2hyb2xpLCBUaGFuZSBDcmVlaylaWiJYY29hc3RhbCBhbmQgbWFuZ3JvdmUgZm9yZXN0cyBhbG9uZyBtdW1iYWkncyBjb2FzdGxpbmUgdmVyc292YSBtYWxhZCB2aWtocm9saSB0aGFuZSBjcmVla5IBEnRvdXJpc3RfYXR0cmFjdGlvbuABAA!16s%2Fg%2F11bws6j3n7?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3Dps://www.google.com/maps/place/Thane+Creek+Flamingo+Sanctuary/@19.1472375,72.9808148,19z/data=!4m10!1m2!2m1!1s+Coastal+and+Mangrove+Forests++Along+Mumbai%E2%80%99s+coastline+(Versova,+Malad,+Vikhroli,+Thane+Creek)!3m6!1s0x3be7b8f063d64e93:0xc6da40a0f507d950!8m2!3d19.1477753!4d72.9817357!15sCmBDb2FzdGFsIGFuZCBNYW5ncm92ZSBGb3Jlc3https://www.google.com/maps/place/Coastal+%26+Marine+Biodiversity+Centre,+Diva+koliwada/@19.1483522,72.9827614,18z/data=!4m10!1m2!2m1!1s+Coastal+and+Mangrove+Forests++Along+Mumbai%E2%80%99s+coastline+(Versova,+Malad,+Vikhroli,+Thane+Creek)!3m6!1s0x3be7b8ae96b690bd:0xe55d0cbc7fa4ddc3!8m2!3d19.148924!4d72.986362!15sCmBDb2FzdGFsIGFuZCBNYW5ncm92ZSBGb3Jlc3RzICBBbG9uZyBNdW1iYWnigJlzIGNvYXN0bGluZSAoVmVyc292YSwgTWFsYWQsIFZpa2hyb2xpLCBUaGFuZSBDcmVlaylaWiJYY29hc3RhbCBhbmQgbWFuZ3JvdmUgZm9yZXN0cyBhbG9uZyBtdW1iYWkncyBjb2FzdGxpbmUgdmVyc292YSBtYWxhZCB2aWtocm9saSB0aGFuZSBjcmVla5IBEnRvdXJpc3RfYXR0cmFjdGlvbuABAA!16s%2Fg%2F11bws6j3n7?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3DRzICBBbG9uZyBNdW1iYWnigJlzIGNvYXN0bGluZSAoVmVyc292YSwgTWFsYWQsIFZpa2hyb2xpLCBUaGFuZSBDcmVlaylaWiJYY29hc3RhbCBhbmQgbWFuZ3JvdmUgZm9yZXN0cyBhbG9uZyBtdW1iYWkncyBjb2FzdGxpbmUgdmVyc292YSBtYWxhZCB2aWtocm9saSB0aGFuZSBjcmVla5IBD25hdHVyZV9wcmVzZXJ2ZeABAA!16s%2Fg%2F11dzd90g85?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D1489914,72.9862027,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipNPnL1l4-zh8xPEFICVnvEOwFAFcBYYrt_PgBVq!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNPnL1l4-zh8xPEFICVnvEOwFAFcBYYrt_PgBVq%3Dw114-h86-k-no!7i4000!8i3000!4m11!1m2!2m1!1s+Coastal+and+Mangrove+Forests++Along+Mumbai%E2%80%99s+coastline+(Versova,+Malad,+Vikhroli,+Thane+Creek)!3m7!1s0x3be7b8ae96b690bd:0xe55d0cbc7fa4ddc3!8m2!3d19.148924!4d72.986362!10e5!15sCmBDb2FzdGFsIGFuZCBNYW5ncm92ZSBGb3Jlc3RzICBBbG9uZyBNdW1iYWnigJlzIGNvYXN0bGluZSAoVmVyc292YSwgTWFsYWQsIFZpa2hyb2xpLCBUaGFuZSBDcmVlaylaWiJYY29hc3RhbCBhbmQgbWFuZ3JvdmUgZm9yZXN0cyBhbG9uZyBtdW1iYWkncyBjb2FzdGxpbmUgdmVyc292YSBtYWxhZCB2aWtocm9saSB0aGFuZSBjcmVla5IBEnRvdXJpc3RfYXR0cmFjdGlvbuABAA!16s%2Fg%2F11bws6j3n7?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Wildlife Reserves & Sanctuaries"
        />
        <ShowTourist
          heading="Thane Creek Flamingo Sanctuary"
          location="Location:Thane, Navi Mumbai, Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/flamingo.jpg"
          para="A part of the Mumbai Metropolitan Region, this sanctuary is famous for its large congregation of flamingos that migrate here between November and May. Apart from flamingos, it houses storks, herons, kingfishers, and various wetland species."
          link="https://www.google.com/maps/place/Thane+Creek+Flamingo+Sanctuary/@19.1472375,72.9808148,19z/data=!4m10!1m2!2m1!1s+Coastal+and+Mangrove+Forests++Along+Mumbai%E2%80%99s+coastline+(Versova,+Malad,+Vikhroli,+Thane+Creek)!3m6!1s0x3be7b8f063d64e93:0xc6da40a0f507d950!8m2!3d19.1477753!4d72.9817357!15sCmBDb2FzdGFsIGFuZCBNYW5ncm92ZSBGb3Jlc3RzICBBbG9uZyBNdW1iYWnigJlzIGNvYXN0bGluZSAoVmVyc292YSwgTWFsYWQsIFZpa2hyb2xpLCBUaGFuZSBDcmVlaylaWiJYY29hc3RhbCBhbmQgbWFuZ3JvdmUgZm9yZXN0cyBhbG9uZyBtdW1iYWkncyBjb2FzdGxpbmUgdmVyc292YSBtYWxhZCB2aWtocm9saSB0aGFuZSBjcmVla5IBD25hdHVyZV9wcmVzZXJ2ZeABAA!16s%2Fg%2F11dzd90g85?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Wildlife Reserves & Sanctuaries"
        />
        <ShowTourist
          heading="Malad Marve Coastal Forest"
          location="Location: Malad, Mumbai, Maharashtra"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/malad.jpg"
          para="This coastal forest near Marve Beach consists of mangroves and sandy ecosystems, providing shelter to crabs, birds, and small marine creatures. It is an essential conservation area for Mumbai’s marine biodiversity."
          link="https://www.google.com/maps/search/Malad+Marve+Coastal+Forest/@19.2000936,72.7922707,16.83z?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Wildlife Reserves & Sanctuaries"
        />
        <ShowTourist
          heading=" Wankhede Stadium"
          location="Location: Marine Drive, Churchgate, South Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/wankhede-stadium-churchgate-mumbai-stadiums-xuu1151zxw.avif"
          para="One of India’s most famous cricket stadiums, Wankhede has hosted numerous international matches, including the 2011 Cricket World Cup Final. It has a seating capacity of 33,000 and serves as the home ground for the Mumbai Indians (IPL team)."
          link="https://www.google.com/maps/place/Wankhede+Stadium/@18.9385098,72.82318,17z/data=!4m10!1m2!2m1!1s+Wankhede+Stadium!3m6!1s0x3be7d1e0f0a26a81:0x87d6e47e04df3916!8m2!3d18.9388528!4d72.825764!15sChBXYW5raGVkZSBTdGFkaXVtWhIiEHdhbmtoZWRlIHN0YWRpdW2SAQdzdGFkaXVt4AEA!16zL20vMDVmNzRu?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Brabourne Stadium"
          location="Location:Churchgate, South Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/brabourne.426.avif"
          para="A historic cricket ground established in 1937, Brabourne has hosted domestic and international matches. It was once the home ground of the Mumbai Cricket Association before Wankhede Stadium was built."
          link="https://www.google.com/maps/place/CCI-Brabourne+Stadium/@18.9322663,72.8221645,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1e64b0e104f:0xe0cc7759694c6489!8m2!3d18.9322612!4d72.8247394!16zL20vMDVmNzRf?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Dadoji Kondadev Stadium"
          location="Location:Thane,Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/dadaji-kondadev-stadium.jpg"
          para="A multi-purpose stadium used for cricket and football. It serves as an important venue for local Maharashtra cricket tournaments and youth training programs."
          link="https://www.google.com/maps/place/Dadoji+Konddev+Stadium,+Thane/@19.1924457,72.9771778,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b9268593c339:0xf9933cd3275c981b!8m2!3d19.1924407!4d72.9797527!16zL20vMGJoeHZx?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Shivaji Park"
          location="Location:Dadar, Central Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/RH_Shivaji-Park-1536x864.webp"
          para="A large open ground famous for nurturing legendary cricketers like Sachin Tendulkar. It is a hub for local cricket, football, and political gatherings."
          link="https://www.google.com/maps/place/Shivaji+Park,+Mumbai,+Maharashtra/@19.0283696,72.8330914,16z/data=!3m1!4b1!4m6!3m5!1s0x3be7cece6ca96d65:0x859f2daca854a87!8m2!3d19.030283!4d72.8384026!16s%2Fm%2F04my2hk?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Azad Maidan"
          location="Location:: Fort, South Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/azad-bombay.jpg"
          para="A historic public sports ground used for cricket matches, football games, and political rallies. It is home to several Mumbai Cricket Association (MCA) training camps."
          link="https://www.google.com/maps/place/Azad+Maidan/@18.9395305,72.8312991,3a,75y,90t/data=!3m8!1e2!3m6!1sAF1QipOHuE3FwVY_q83fXTc4ANfEcMEfHUnwKh5AGFQP!2e10!3e12!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipOHuE3FwVY_q83fXTc4ANfEcMEfHUnwKh5AGFQP%3Dw152-h86-k-no!7i4608!8i2592!4m11!1m2!2m1!1sAzad+Maidan!3m7!1s0x3be7d1582f8607e9:0x765459a643967b19!8m2!3d18.9395305!4d72.8312991!10e5!15sCgtBemFkIE1haWRhbloNIgthemFkIG1haWRhbpIBCnBsYXlncm91bmTgAQA!16zL20vMGJ5cDIw?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Oval Maidan"
          location="Location:Churchgate, South Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/oval-maidan.jpg"
          para="A large recreational ground used for cricket, football, and jogging. It is surrounded by iconic colonial-era buildings, giving it a scenic appeal."
          link="https://www.google.com/maps/place/Oval+Maidan/@18.9296278,72.8263128,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1c2961479bf:0x6302dec0987da87b!8m2!3d18.9296227!4d72.8288877!16zL20vMGJ2NnE5?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Cross Maidan"
          location="Location: Marine Lines, South Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/cross.jpg"
          para="Another historic cricket and football ground in the heart of Mumbai. It hosts inter-college tournaments and training sessions for young athletes."
          link="https://www.google.com/maps/place/Cross+Maidan+Cross/@18.9390227,72.8281984,18z/data=!4m10!1m2!2m1!1s+Cross+Maidan!3m6!1s0x3be7d1dfcbfe0b5b:0xeca7251c6a0e6150!8m2!3d18.9403861!4d72.8292942!15sCgxDcm9zcyBNYWlkYW6SARVyZWxpZ2lvdXNfZGVzdGluYXRpb27gAQA!16s%2Fg%2F11c5zq6q69?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Cooperage Football Ground"
          location="Location: Nariman Point, South Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/cooperage.jpg"
          para="One of Mumbai’s top football stadiums, home to the Mumbai District Football Association (MDFA). It hosts I-League matches and local football tournaments."
          link="https://www.google.com/maps/place/Cooperage+Football+Ground/@18.9243784,72.8261292,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7d1c1eff3499b:0x8898b47d944defe3!8m2!3d18.9243733!4d72.8287041!16zL20vMGM2ZzNw?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Andheri Sports Complex (Shahaji Raje Krida Sankul)"
          location="Location:Andheri West, Western Suburbs"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/Andheri_Sports_Complex_Swimming_Pool.avif"
          para=""
          link="https://www.google.com/maps/place/Sports+Complex,+JP+Rd,+Sahayog+Society,+Munshi+Nagar,+Andheri+West,+Mumbai,+Maharashtra+400058/@19.1290115,72.8327718,15.9z/data=!4m15!1m8!3m7!1s0x3be7c9d88376bc75:0x6a8a722327db4b3d!2sSports+Complex,+JP+Rd,+Sahayog+Society,+Munshi+Nagar,+Andheri+West,+Mumbai,+Maharashtra+400058!3b1!8m2!3d19.1267975!4d72.8362698!16s%2Fm%2F04mz2nx!3m5!1s0x3be7c9d88376bc75:0x6a8a722327db4b3d!8m2!3d19.1267975!4d72.8362698!16s%2Fm%2F04mz2nx?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Mumbai Football Arena"
          location="Location:Andheri West, Western Suburbs"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/mumbai-football-arena-793769.jpg"
          para="A dedicated football stadium within the Andheri Sports Complex, serving as the home ground for Mumbai City FC (Indian Super League - ISL team)."
          link="https://www.google.com/maps/place/Mumbai+Football+Arena/@19.1307459,72.8333021,15.17z/data=!4m6!3m5!1s0x3be7b627139c039d:0x214ec6f6f26a6825!8m2!3d19.1289872!4d72.8354683!16s%2Fg%2F11c1pft015?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Priyadarshini Park & Sports Complex"
          location="Location:Napean Sea Road, South Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/priyadarshini1.jpg"
          para="A public park with premium sports facilities, including a running track, tennis courts, and a gymnasium. It overlooks the Arabian Sea, making it a scenic fitness spot."
          link="https://www.google.com/maps/place/Priyadarshini+Park/@18.9591562,72.7968792,17z/data=!4m10!1m2!2m1!1sPriyadarshini+Park+%26+Sports+Complex!3m6!1s0x3be7cde10fe97ac3:0x19f9e3894e2b8919!8m2!3d18.9570666!4d72.7989051!15sCiNQcml5YWRhcnNoaW5pIFBhcmsgJiBTcG9ydHMgQ29tcGxleFolIiNwcml5YWRhcnNoaW5pIHBhcmsgJiBzcG9ydHMgY29tcGxleJIBBHBhcmuaASNDaFpEU1VoTk1HOW5TMFZKUTBGblNVUjFaMXBxYkVaUkVBReABAPoBBAgJEDo!16s%2Fg%2F11fx8vcqd6?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Air India Sports Club"
          location="Location:Kalina, Santacruz East"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/air%20india.avif"
          para="A private sports club with a football ground, tennis courts, and cricket facilities. It was once used by Air India’s corporate teams for national tournaments."
          link="https://www.google.com/maps/place/Air+India+Sports+Club+(+cricket+ground+)/@19.0845209,72.8547983,17z/data=!4m10!1m2!2m1!1sAir+India+Sports+Clubndani+Gardens)lex!3m6!1s0x3be7c8564097b13d:0x26b262a60c060604!8m2!3d19.0845209!4d72.8595619!15sCidBaXIgSW5kaWEgU3BvcnRzIENsdWIgTmFuZGkgR2FyZGVucylsZXhaKSInYWlyIGluZGlhIHNwb3J0cyBjbHViIG5hbmRpIGdhcmRlbnMgbGV4kgENYXRobGV0aWNfY2x1YpoBJENoZERTVWhOTUc5blMwVkpRMEZuU1VSSGFuTmxjemwzUlJBQuABAPoBBAgAEEM!16s%2Fg%2F11bwpyd7c6?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading=" Goregaon Sports Club"
          location="Location:Malad-Goregaon, Western Suburbs"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/goregoan%20club.jpg"
          para="A recreation and fitness club offering badminton, tennis, swimming, cricket, and squash. It is a hub for sports lovers in Mumbai’s western suburbs."
          link="https://www.google.com/maps/place/Goregaon+Sports+Club/@19.1819769,72.8322984,17z/data=!3m1!4b1!4m6!3m5!1s0x3be7b72e4e215555:0xb0e590b959b55b44!8m2!3d19.1819719!4d72.8348733!16s%2Fg%2F11f4054qj7?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
        <ShowTourist
          heading="Police Gymkhana Grounds"
          location="Location: Marine Drive, South Mumbai"
          img="https://raw.githubusercontent.com/Pratik0k/navizit-images/refs/heads/main/police%20gymkhana.jpg"
          para="An exclusive sports ground for Mumbai police personnel, offering cricket, tennis, and fitness training."
          link="https://www.google.com/maps/place/Police+Gymkhana+Cricket+Ground/@18.9524388,72.8139035,13.5z/data=!4m6!3m5!1s0x3be7cfc48ed2c303:0xf97b77cb3899492f!8m2!3d18.9486168!4d72.820919!16s%2Fg%2F11hyk2_552?entry=ttu&g_ep=EgoyMDI1MDIxNy4wIKXMDSoASAFQAw%3D%3D"
          website=""
          webname=""
          category="Sports & Recreation Grounds"
        />
              


                 

                 <AllFooter/>
            </div>
        </>
    )
}
