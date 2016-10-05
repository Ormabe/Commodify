let data = {
	water: [

		{id: "blk", name: "Blk. Enhanced Water (16.9oz)" , price: 24.99, image: "http://i.imgur.com/AlZWXmN.png", description: "blk. alkaline mineral water, is infused with naturally black fulvic trace minerals. The innovative infusion of Fulvic trace minerals with fresh alkaline water, gives blk it's distinct black color. Fulvic trace minerals are thought to contain an abundance of natural plant sourced nutrients including: natural electrolytes, amino acids, 77 trace minerals, antioxidants, and a pH of 8.0+"}, 

		{id: "andes-mountain-water", name: "Andes Mountain Water (50CL GLASS)", price: 34.99, image: "http://i.imgur.com/JlkZ29gl.jpg", description: "Water scooped by the hands of an authentic local Andean villiage boy. The Andes has one of the waters with lowest mineral content and a natural PH of 7. It is considered part of the world's purest waters."}, 

		{id: "iceberg-water", name: "Glace Rare Iceberg Water", price: 15.00, image: "http://i.imgur.com/gNJNAfR.jpg", description: "Imagine a time when the earth was pure. And imagine a time, tens of thousands of years ago, when all of earth’s water was original, untouched, and absolutely perfect. Imagine water absorbed by the clean atmosphere, and then falling as snow. More snow falls and, it becomes compressed, becomes ice and, as thousands of years pass, it is locked deep and safe inside Greenland’s frozen heart. The heart beats, the ice moves, and gradually it breaks away and an iceberg is born. And now thanks to the wonders of global warming, it has never been easier to have a nice cold glass of iceberg water. Get it now before it’s all gone!"}, 

		{id: "birch-tree-water", name: "Byarozavik Organic Birch Tree Water (17 fl. oz.)", price: 8.99, image: "http://i.imgur.com/nyd5MgE.jpg", description: "A centuries-old tradition in Scandinavia, Eastern Europe, Russia and Northern China with a light, crisp, refreshing taste! Non-GMO, gluten free, USDA Organic! Hydrate and rejuvenate your body. Copper, calcium, zinc, iron, potassium, magnesium and many other micronutrients in trace amounts... easier to absorb! Excellent source of Xylitol!"} , 

		{id: "ice-spring-water", name: "Icelandic Glacial Natural Spring Water, (500mL/16.9fl. oz.)", price: 14.99, image: "http://i.imgur.com/1XdPlCXl.png" , description: "From spring to door. Bottled at the source. Water without compromise. Icelandic Glacial™ is the super-premium natural spring water from the 'Land Of Fire and Ice'. Home to glaciers, spouting geysers, volcanoes and raging rivers, Iceland is one of the world’s cleanest ecosystems. It’s also home to the legendary Ölfus Spring, the source of Icelandic Glacial.  Formed more than 5,000 years ago and shielded by an impenetrable barrier of lava rock, the Spring is constantly replenished by rain, snow and ice-melt from the nearby mountains.  The water is slowly and naturally filtered through layers of volcanic rock, thereby producing a natural spring water so pure that nothing is added or taken away."}, 

		{id: "volcanic-water", name: "Waiākea Hawaiian Volcanic Water (500 mL)", price: 11.99, image: "http://i.imgur.com/B01fmfO.jpg", description: " Completely isolated from the rest of the world, Waiākea® offers purity in its ultimate form. It is premium by nature. Waiākea® is filtered through thousands of feet of porous lava rock before re-emerging at its community water source, located at the eastern base of the Mauna Loa volcano in a secluded area surrounded by rich and bio-diverse forest preserves. Waiākea is constantly flowing and takes less than 30 days to arrive from where it originates on Mauna Loa. This gives Waiākea a superior rating in virginality, and a soft and smoothe taste with a hint of sweet."}],
	air: [

		{id: "vitality-air", name: "Vitality Air (8L)", price: 31.99, image: "http://i.imgur.com/Di2isk1l.png", description: "Fresh air: the way it was meant to be experienced. We’re discovering that our senses can tell the difference between poor air and quality breathing. Just like bottled water, premium air is a growing industry because people are noticing the difference. Now with Vitality Air, anyone can access this high quality, convenient and affordable luxury experience. Our specially designed bottle allows us to capture and retain the freshness of the contents inside. No CFC’s, no propellants."},

		{id: "applachian-air",name: "Appalachian Air Company Artisan Air (1L)", price: 799.99, image: "http://i.imgur.com/sgTrGMLl.png", description: "We take the time to gather 100% of our air by hand and put it through a 27-step filtration process.  We than infuse the air with only the freshest aroma filled fruits. Each bottle is personally certified by our founder and air expert, Shawn Avery. Our air is Gluten Free, GMO Free, BPA Free, Vegan Friendly, Free Range, Fair Trade and USDA Organic."},

		{id: "aethaer", name: "AETHAER Somerset, Great Britain (580mL)", price:101.99 , image: "http://i.imgur.com/996d9mo.jpg", description: "AETHAER is collected from fresh natural air flowing over a range of prime locations, from fertile lush pastures and wild untouched meadows, to wind-kissed hilltops and heavenly snow-capped mountains. AETHAER is filtered organically by nature as it flows between the leaves of woodland trees, absorbs pristine water as it passes over babbling brooks and forest streams, and is lovingly caressed as it rolls over and between mineral rich rock formations, after which it is blown up over vistas of untouched beauty to where the AETHAER is collected and bottled. Every jar of AETHAER is labelled, stating the area from which the AETHAER was collected, and a description of the contents is provided on the reverse of the container. Your purchase will be accompanied by a label of Authenticity, which will be affixed to the lid of the jar, ensuring your package contains authentic, untouched, pure, clear AETHAER."},

		{id: "air", name: "a i r (1L) ", price: 59.99, image: "http://i.imgur.com/7ZWOBsR.png?1" , description: "Fed up with the regular old nitrogen-oxygen blend? A i r is here to reviatlize your nostrils. Lovingly handcrafted by bearded tattooed men in plaid, a i r is infused with herbs and love.  All a i r products come in repurposed recyclable mason jars."},

		{id: "boost", name: "Boost Oxygen Natural Energy in a Can, (22 oz)", price: 12.99, image: "http://i.imgur.com/MwsNcdcl.png", description: "Boost Oxygen is 95% purified oxygen (5% ambient air) that comes in light-weight, easy-to-use canisters, and is used as a supplement to enhance sports recovery, alleviate high altitude effects, remedy hangovers and fatigue, and otherwise promote a heightened sense of personal health and well-being."},

		{id: "liquidO2", name: "Premium Concentrated Liquid Oxygen Supplement, (4 Oz)", price: 29.99, image: "http://i.imgur.com/u8WvKyZl.png", description: "Tired? Health issues? Want more energy? Difficulty concentrating? Need more stamina and endurance?Liquid Oxygen drops could very well be your answer! In our oxygen-depleted world, most of us do not have optimal levels of oxygen in our blood. Taking Liquid Oxygen every day can boost your oxygen levels, thus giving you more energy and better overall health. Oxygen makes up 65% of the human body - and oxygen is responsible for 90% of the body's energy! How do liquid oxygen drops work? The drops are dissolved into water, creating a highly oxygenated beverage. When consumed, this extra oxygen is quickly absorbed through the digestive processing, raising the level of oxygen in your blood stream. Our Liquid Oxygen drops are 100% safe, natural, sterile, and non-toxic." }],

	seeds: [

		{id: "jaylo", name: "Jaylo (F1) Eggplant Seed (100 pack)", price: 70.19 , image: "http://i.imgur.com/R6rAnW5.jpg", description: "Black Italian type for greenhouse production.Jaylo is high yielding and has the vigor to make it through a long season under greenhouse conditions. Beautiful, glossy black fruits have excellent flavor. A very versatile variety, fruits become firm at a small size, allowing it to be harvested at half-pound baby size or as a quarter-pound mini eggplant. Spineless plant with green calyx."}, 

		{id: "artichoke", name: "Opera(F1) Artichoke Seed (100 pack)", price: 84.75 , image: "http://i.imgur.com/fD6gLxV.png", description: "Purple annual for late summer to mid-fall harvest.Purple artichoke specifically bred for annual production from seed. The 2 1/2-3' tall, upright plants produce 1-3 primary buds, which average 3-4in in diameter, followed by 8-10 secondary buds that are 1 1/2- 2 3/4in in diameter. Perennial in Zone 7 and warmer; otherwise treat as an annual."}, 

		{id: "purple-carrot", name: "Purple 68(F1) Carrot Seed (10,000 seeds)", price: 16.69 , image: "http://i.imgur.com/XxoSsYT.png", description: 'Uniform deep-purple roots.Intended for midsummer sowings and fall harvests as it will bolt under increasingly warm temperatures and/or during long-day-length periods. High yields of attractive, 8-10" roots. Intermediate resistance to Alternaria blight. Imperator type. Also available with NOP-compliant pelleting.'}, 

		{id: "chard", name: "Chard, Bright Lights Micro Green Seed (1lb)", price: 101.99 , image: "http://i.imgur.com/6mbHIcRl.jpg", description: "Light green, gold, pink, orange, purple, red, and white stems. Mild beet flavor. Use in any beet dish to add multiple colors. These microgreens are incredibly rich in vitamins K, A, and C. They are also full of protein, dietary fibre, and antioxidants. Learn how to grow microgreens in our online growing instructions below, and take advantage of our special microgreen Swiss chard seeds today. Microgreens are easy to digest, so their nutrition is entirely absorbed by the human body."}, 

		{id: "squash",name: "Bonbon Treated (F1) Squash Seed (1 lb)", price: 122.99 , image: "http://i.imgur.com/wKcQMG2.jpg", description: "mproved taste, uniformity, and yield. Bonbon has the classic appearance of the perfect buttercup squash: deep green, smooth skin, and a prominent gray 'button' at the base. Weight avg. 4-5 lb., the same or slightly larger than Buttercup Burgess Strain. Avg. yield: 4 fruits/plant."}, 

		{id: "broccoli", name: "Santee (F1) Broccoli Seed (1,000 seeds)", price: 45.25 , image: "http://cdn1.johnnyseeds.com/images/Product/large/2515.jpg", description: "For late fall/winter harvest sprouting broccoli. Beautiful purple florets and green stems are sweet and tender, and can be eaten fresh or cooked. Turns green when cooked. Plants produce over a long harvest period of 3-5 weeks. Suitable for fall crops in all areas, and fall and winter crops in mild areas. Not for summer production as the florets will be bitter in hot weather. For fall crops, seed late spring/early summer, for winter crops sow in late summer."}],


	grains: [

		{id: "", name: "", price: null, image: "", description: ""}, 

		{id: "", name: "", price: null, image: "", description: ""}, 

		{id: "", name: "", price: null, image: "", description: ""}, 

		{id: "", name: "", price: null, image: "", description: ""}, 

		{id: "", name: "", price: null, image: "", description: ""}, 

		{id: "", name: "", price: null, image: "", description: ""}],

	honey: [

		{id: "elvish-honey", name: "Gunduz Elvish Honey (1kg)", price: 4500, image: "http://i.imgur.com/1aCkIMwl.jpg", description: "High-quality, mineral-rich honey. This special honey is extracted from a 1,800-meter deep cave in the Saricayir valley of Artvin city, northeastern Turkey. The honey can be used as medicine as well as food. The honey is produced in a natural way and without hives. The area is rich in endemic and medicinal plants."}, 

		{id: "manuka-honey", name: "Queen Bee Manuka Honey (340g)", price: 39.99, image: "http://i.imgur.com/LvQGt3bl.png", description: "Packed with 100 times more of an antibacterial compound than regular honey, it's a natural cure for anything from acne to a cut on the leg. Queen Bee Manuka Honey is harvested from rural uncultivated areas of New Zealand where the Manuka bush grows wild in a pollution-free environment."}, 

		{id: "bashkir-honey", name: "Bashkir Honey", price: 229.99, image: "http://i.imgur.com/S1WNCG6l.jpg?1", description: "It has beautiful amber, golden-amber and light amber colors. It is considered a polyfloral honey and has aromatic flavors with a hint of emanation from meadow flowers. The honey gives rich mouthfeel with attached pleasant aftertaste that satisfy everyone who is looking for unaltered gifts of Mother Nature. Bashkir honey is made by the Burzyan wild-hive bees, belonging to the European black bee. The special value of wild-hive honey is in its maturity: It is collected only once per year, in autumn, so it has time to fully mature."}, 

		{id: "sourwood-honey", name: "Savannah Bee Sourwood Honey Gold Reserve", price: 112.99, image: "http://i.imgur.com/ZX3Ci7nl.png", description: "Such a fickle bloom. It can grow a number of places but only produces nectar in the upper heights of the Southern Appalachians. Deep stands of sourwood trees display long fingers of white blossoms that bejewel every stem. Those little white bells are the source of love for the honeybees during their furious midsummer fling. The fruits of their courtship, when cared for by the master sourwood maker, should be valued more than gold. When you are lucky enough to taste the best, your taste buds are met with an orchestra of flavors ranging from maple spice to caramel to gingerbread. This unique flavor is universally appealing, and arguably the best in the world."}, 

		{id: "sidr-honey", name: "Pure Yemen Sidr Honey", price: 129.99, image: "http://i.imgur.com/8HFT9Gkl.png", description: "Premium Sidr Honey from Yemen, Wadi Do’an. Our Sidr honey is collected during the winter season which guarantees high concentration of Sidr and outstanding quality. Yemeni Sidr Honey is considered one of the finest and most expensive honey in the world. It's distinctive taste, high nutrition value, and limited quantity gives it this reputation. Sidr honey comes from Sidr trees which grow uncultivated in the desert areas of Yemen. Honey experts have disputed about the distinctive taste and flavor of Sidr honey. Some referred such taste to the nature of the soil in such areas, others returned it to the nature of Sidr trees, and some mentioned that such distinctive taste comes as a result of the fact that bees have to travel several miles (maybe hundreds in round trip) to extract the nectar from the Sidr tree. Our Sidr honey always contains royal jelly because our beekeepers don't extract royal jelly from the harvested hives, and that's why it is sometimes called Royal Sidr honey, or Maliky Sidr honey."}, 

		{id: "langese-honey", name: "Langnese Honey, Summer Flowers - 17.6 oz jar", price: 112.99, image: "http://i.imgur.com/NkUQHicl.png", description: "US grade A. Since 1927. The brand that stands for nature. 100% natural. Premium quality from Germany. Golden clear bee honey from lush blooming natural landscapes blessed by the sun. Langnese Honey has been known for purity and high quality since 1927. Product of Germany."}],
};

data.waterGet = function () {
	return this.water;
};

data.airGet = function () {
	return this.air;
};

data.seedsGet = function () {
	return this.seeds;
};

data.grainsGet = function () {
	return this.grains;
};

data.honeyGet = function () {
	return this.honey;
};


export default data;