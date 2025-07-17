// Import all story images
import story1Image from '@/assets/story1-squirrel.jpg';
import story2Image from '@/assets/story2-fox.jpg';
import story3Image from '@/assets/story3-bunny.jpg';
import story4Image from '@/assets/story4-elephant.jpg';
import story5Image from '@/assets/story5-turtle.jpg';
import story6Image from '@/assets/story6-hedgehog.jpg';
import story7Image from '@/assets/story7-duckling.jpg';
import story8Image from '@/assets/story8-bear.jpg';
import story9Image from '@/assets/story9-ant.jpg';
import story10Image from '@/assets/story10-friendship.jpg';
import story11Image from '@/assets/story11-dolphin.jpg';
import story12Image from '@/assets/story12-owl.jpg';
import story13Image from '@/assets/story13-kitten.jpg';
import story14Image from '@/assets/story14-mouse.jpg';
import story15Image from '@/assets/story15-parrot.jpg';
import story16Image from '@/assets/story16-penguin.jpg';
import story17Image from '@/assets/story17-lamb.jpg';
import story18Image from '@/assets/story18-octopus.jpg';
import story19Image from '@/assets/story19-butterfly.jpg';
import story20Image from '@/assets/story20-unicorn.jpg';

export interface Story {
  id: number;
  title: string;
  titleNepali: string;
  moral: string;
  moralNepali: string;
  image: string;
  content: string;
  contentNepali: string;
  summary: string;
  summaryNepali: string;
}

export const stories: Story[] = [
  {
    id: 1,
    title: "The Sharing Squirrel",
    titleNepali: "बाँड्ने गिलहरी",
    moral: "Sharing makes everyone happy",
    moralNepali: "बाँड्दा सबै खुसी हुन्छन्",
    image: story1Image,
    summary: "Sally Squirrel learns that sharing her acorns brings joy to all her friends.",
    summaryNepali: "स्याली गिलहरीले सिक्छे कि आफ्ना अकोर्न बाँड्दा सबै साथीहरूलाई खुसी मिल्छ।",
    content: `Once upon a time, in a beautiful oak forest, lived a little squirrel named Sally. Sally had worked very hard all summer collecting acorns for winter.

One chilly autumn day, Sally's friends came to visit. Benny the rabbit had run out of carrots, and Chirpy the bird couldn't find any seeds. They looked so hungry and sad.

At first, Sally thought, "I need all my acorns for winter!" But then she saw her friends shivering and looking worried. Her heart felt warm when she remembered how much fun they had together in summer.

"Friends," said Sally with a big smile, "let's share my acorns! We can all have a wonderful winter together!"

They shared the acorns and spent the whole winter telling stories, playing games, and staying warm together. Sally discovered that sharing her acorns made her feel much happier than keeping them all to herself.

When spring came, all her friends helped Sally collect even more acorns than before!`,
    contentNepali: `एक समयमा, एउटा सुन्दर ओकको जंगलमा स्याली नामकी सानी गिलहरी बस्थी। स्यालीले जाडोका लागि अकोर्न संकलन गर्न सारा गर्मी कडा मेहनत गरेकी थिई।

एक चिसो शरद ऋतुको दिन, स्यालीका साथीहरू भेट्न आए। बेनी खरायोसँग गाजर सकिएको थियो, र चिर्पी चराले कुनै बीउ भेट्टाउन सकेको थिएन। तिनीहरू धेरै भोकाएका र दुःखी देखिन्थे।

सुरुमा, स्यालीले सोची, "मलाई जाडोका लागि मेरा सबै अकोर्न चाहिन्छ!" तर त्यसपछि उनले आफ्ना साथीहरूलाई काँप्दै र चिन्तित देखेकी। गर्मीमा तिनीहरूसँग कति रमाइलो भएको सम्झँदा उनको मुटु न्यानो भयो।

"साथीहरू," स्यालीले ठूलो मुस्कानका साथ भनी, "आउनुस् मेरा अकोर्न बाँडौं! हामी सबैमिलेर सुन्दर जाडो बिताउन सक्छौं!"

तिनीहरूले अकोर्न बाँडे र पूरै जाडो कथाहरू भन्दै, खेल खेल्दै, र सँगै न्यानो बसेर बिताए। स्यालीले पत्ता लगाई कि आफ्ना अकोर्न बाँड्दा आफूलाई सबै राख्नुभन्दा धेरै खुसी मिल्छ।

जब वसन्त आयो, उनका सबै साथीहरूले स्यालीलाई पहिलेभन्दा धेरै अकोर्न संकलन गर्न मद्दत गरे!`
  },
  {
    id: 2,
    title: "The Honest Little Fox",
    titleNepali: "इमानदार सानो फ्याउरो",
    moral: "Honesty is always the best choice",
    moralNepali: "इमानदारी सधैं उत्तम विकल्प हो",
    image: story2Image,
    summary: "Finn the fox finds a golden coin and learns that being honest feels better than lying.",
    summaryNepali: "फिन फ्याउरोले सुनको सिक्का फेला पार्छ र सिक्छ कि इमानदार हुनु झूट बोल्नुभन्दा राम्रो लाग्छ।",
    content: `In a peaceful meadow lived a clever young fox named Finn. Finn was known for being very smart, but sometimes he would stretch the truth when it suited him.

One sunny morning, while playing near the old oak tree, Finn found a shiny golden coin half-buried in the dirt. It was the most beautiful thing he had ever seen!

Just then, old Mr. Rabbit came hopping by, looking very worried. "Oh dear," sighed Mr. Rabbit, "I've lost my special golden coin somewhere in this meadow. It was a gift from my grandmother."

Finn's heart started beating fast. He could keep the coin and no one would ever know. But as he looked at Mr. Rabbit's sad face, something inside him felt uncomfortable.

"Mr. Rabbit," said Finn, pulling the golden coin from his fur, "is this what you're looking for?"

Mr. Rabbit's eyes lit up with joy! "Oh, thank you, Finn! You're so honest and kind!" He was so grateful that he invited Finn to his house for the most delicious carrot cake.

From that day on, Finn always chose to tell the truth. He discovered that being honest made him feel proud and brought him wonderful friendships.`,
    contentNepali: `एउटा शान्त घाँसे मैदानमा फिन नामको चतुर जवान फ्याउरो बस्थ्यो। फिन धेरै चतुर भएको कारणले प्रसिद्ध थियो, तर कहिलेकाहीं आफ्नो फाइदाका लागि सत्यलाई तान्ने गर्थ्यो।

एक घामिलो बिहान, पुरानो ओकको रुखको नजिक खेल्दै गर्दा, फिनले माटोमा आधा गाडिएको चम्किलो सुनको सिक्का फेला पार्यो। त्यो उसले देखेको सबैभन्दा सुन्दर चीज थियो!

त्यसैबेला, बुढो श्रीमान् खरायो धेरै चिन्तित देखिँदै उफ्र्दै आयो। "ओह प्रिय," श्रीमान् खरायोले सास फेर्दै भन्यो, "मैले यो घाँसे मैदानमा कतै मेरो विशेष सुनको सिक्का हराएको छु। त्यो मेरी हजुरआमाको उपहार थियो।"

फिनको मुटु छिटो धड्कन थाल्यो। उसले सिक्का राख्न सक्थ्यो र कसैलाई थाहा नहुने थियो। तर श्रीमान् खरायोको दुःखी अनुहार हेर्दा, उसभित्र केही असहज महसुस भयो।

"श्रीमान् खरायो," फिनले आफ्नो रौंबाट सुनको सिक्का निकाल्दै भन्यो, "के तपाईं यही खोजिरहनुभएको हो?"

श्रीमान् खरायोका आँखा खुसीले चम्किए! "ओह, धन्यवाद, फिन! तिमी कस्तो इमानदार र दयालु छौ!" उनी यति कृतज्ञ थिए कि उनले फिनलाई सबैभन्दा स्वादिष्ट गाजरको केकको लागि आफ्नो घर निम्तो दिए।

त्यस दिनदेखि, फिनले सधैं सत्य बोल्ने छनौट गर्यो। उसले पत्ता लगायो कि इमानदार हुनाले उसलाई गर्व महसुस गराउँछ र उत्कृष्ट मित्रता ल्याउँछ।`
  },
  {
    id: 3,
    title: "The Brave Bunny",
    titleNepali: "साहसी खरायो",
    moral: "Being brave means standing up for others",
    moralNepali: "साहसी हुनुको मतलब अरूका लागि उभिनु हो",
    image: story3Image,
    summary: "Little Pip shows that even the smallest bunny can be brave when helping others.",
    summaryNepali: "सानो पिपले देखाउँछ कि सबैभन्दा सानो खरायो पनि अरूलाई मद्दत गर्दा साहसी हुन सक्छ।",
    content: `In a colorful flower meadow lived a very small bunny named Pip. Pip was the tiniest bunny in the whole meadow, and sometimes she felt too small to help anyone.

One afternoon, while hopping through the daisies, Pip heard a tiny squeak for help. Behind a big sunflower, she found Squeaky the field mouse trembling with fear. A much larger animal was approaching!

"Please help me," whispered Squeaky. "I'm too scared to run!"

Even though Pip was small and her heart was beating fast, she knew she had to help her friend. When Buster the big (but actually gentle) bear came lumbering through the flowers, Pip hopped right in front of him.

"Stop!" called Pip in her bravest voice, even though her paws were shaking. "You're scaring my friend Squeaky!"

Buster stopped and looked down at the tiny bunny. "Oh my!" he said gently. "I'm so sorry! I was just looking for honey and didn't see little Squeaky. I would never hurt anyone."

Pip realized that sometimes being brave doesn't mean you're not scared - it means you do the right thing even when you are scared.

From that day on, whenever someone needed help in the meadow, they knew they could count on Pip, the bravest little bunny of all!`,
    contentNepali: `एउटा रंगबिरंगी फूलको घाँसे मैदानमा पिप नामकी एक धेरै सानी खरायो बस्थी। पिप पूरै घाँसे मैदानमा सबैभन्दा सानी खरायो थिई, र कहिलेकाहीं उसलाई कसैलाई मद्दत गर्न निकै सानो भएको महसुस हुन्थ्यो।

एक दिउँसो, गुलाफी फूलहरूमा उफ्रिँदै गर्दा, पिपले मद्दतको लागि सानो चिच्याहट सुनी। एउटा ठूलो सूर्यमुखीको पछाडि, उसले डरले काँपिरहेको स्क्विकी मैदानी मुसा भेट्टाई। एउटा धेरै ठूलो जनावर नजिक आइरहेको थियो!

"कृपया मलाई मद्दत गर्नुहोस्," स्क्विकीले फुसफुसाउँदै भन्यो। "म दौडन निकै डराएको छु!"

पिप सानी भए पनि र उसको मुटु छिटो धड्किरहेको भए पनि, उसलाई थाहा थियो कि उसले आफ्नो साथीलाई मद्दत गर्नुपर्छ। जब बस्टर ठूलो (तर वास्तवमा नम्र) भालु फूलहरूबीच लर्खराउँदै आयो, पिप सिधै उसको अगाडि उफ्रिई।

"रोक!" पिपले आफ्नो सबैभन्दा साहसी आवाजमा बोलाई, उसका पञ्जाहरू काँपिरहे पनि। "तिमीले मेरो साथी स्क्विकीलाई डराइरहेको छौ!"

बस्टरले रोकेर सानी खरायोलाई हेर्यो। "ओह मेरो!" उसले नम्रताका साथ भन्यो। "मलाई माफ गर्नुहोस्! म केवल मह खोजिरहेको थिएँ र सानो स्क्विकीलाई देखेको थिइनँ। म कहिल्यै कसैलाई हानि गर्दिनँ।"

पिपले महसुस गरी कि कहिलेकाहीं साहसी हुनुको मतलब तिमी डराएको छैनौ भन्ने होइन - यसको मतलब तिमी डराएको भए पनि सही काम गर्नु हो।

त्यस दिनदेखि, जहिले पनि घाँसे मैदानमा कसैलाई मद्दत चाहिन्थ्यो, तिनीहरूलाई थाहा थियो कि तिनीहरू सबैभन्दा साहसी सानी खरायो पिपमा भर पर्न सक्छन्!`
  },
  {
    id: 4,
    title: "The Kind Elephant",
    titleNepali: "दयालु हात्ती",
    moral: "Kindness makes the world a better place",
    moralNepali: "दयाले संसारलाई राम्रो ठाउँ बनाउँछ",
    image: story4Image,
    summary: "Ellie the elephant shows how one act of kindness can make a big difference.",
    summaryNepali: "एली हात्तीले देखाउँछ कि दयाको एक कार्यले कसरी ठूलो फरक पार्न सक्छ।",
    content: `In the heart of the African savanna lived a gentle elephant named Ellie. Ellie had a very special trunk that could reach the highest branches of the acacia trees.

One hot summer day, the watering hole was getting smaller, and all the animals were thirsty and tired. Little Miko the monkey sat sadly under a tree, looking up at the juicy fruits that were too high for him to reach.

"I'm so hungry," sighed Miko. "But these fruits are way too high, and I'm too tired to climb today."

Ellie heard Miko's sad voice and walked over with a warm smile. Without being asked, she gently wrapped her trunk around the highest branch and shook it carefully. The most delicious fruits fell down right next to Miko!

"Oh, thank you, Ellie!" said Miko happily. "You're so kind!"

But Ellie wasn't finished. She used her trunk to pick more fruits from different trees and shared them with all the other animals who were too tired or too small to get their own food.

Soon, all the animals in the savanna were talking about Ellie's kindness. They started helping each other too - the giraffes shared leaves, the zebras shared the best grass, and the lions shared the shadiest spots.

Ellie learned that one small act of kindness can spread like ripples in water, making everyone's world a little brighter and happier.`,
    contentNepali: `अफ्रिकी सवानाको मुटुमा एली नामकी एक नम्र हात्ती बस्थी। एलीको एक विशेष सुँड थियो जसले बबुलका रुखका सबैभन्दा उच्च हाँगाहरू पुग्न सक्थ्यो।

एक तातो गर्मीको दिन, पानीको कुण्ड सानो हुँदै गइरहेको थियो, र सबै जनावरहरू तिर्खाएका र थकेका थिए। सानो मिको बाँदरले रुखमुनि दुःखी भएर बसेको थियो, उसले पुग्न नसक्ने उच्च रसिला फलफूलहरूलाई हेरिरहेको थियो।

"म धेरै भोकाएको छु," मिकोले सास फेर्दै भन्यो। "तर यी फलहरू धेरै उच्च छन्, र म आज चढ्न निकै थकेको छु।"

एलीले मिकोको दुःखी आवाज सुने र न्यानो मुस्कानका साथ नजिक गई। नसोधिकनै, उनले आफ्नो सुँडलाई सबैभन्दा उच्च हाँगामा बेरी र होसियारीका साथ हल्लाई। सबैभन्दा स्वादिष्ट फलहरू मिकोको छेउमा खसे!

"ओह, धन्यवाद, एली!" मिकोले खुसीसँग भन्यो। "तिमी कति दयालु छौ!"

तर एली सकिएको थिएन। उनले आफ्नो सुँड प्रयोग गरेर विभिन्न रुखहरूबाट थप फलहरू टिपी र अन्य सबै जनावरहरूसँग बाँडी जो आफ्नो खाना पाउन धेरै थकेका वा सानै थिए।

चाँडै, सवानाका सबै जनावरहरूले एलीको दयाको बारेमा कुरा गर्न थाले। तिनीहरूले पनि एकअर्कालाई मद्दत गर्न थाले - जिराफहरूले पातहरू बाँडे, जेब्राहरूले उत्तम घाँस बाँडे, र सिंहहरूले सबैभन्दा छायांका ठाउँहरू बाँडे।

एलीले सिकी कि दयाको एउटा सानो कार्यले पानीमा तरंगहरू जस्तै फैलिन सक्छ, सबैको संसारलाई अलि उज्यालो र खुसी बनाउँदै।`
  },
  {
    id: 5,
    title: "The Patient Turtle",
    titleNepali: "धैर्यवान कछुवा",
    moral: "Patience and persistence lead to success",
    moralNepali: "धैर्य र दृढताले सफलता दिलाउँछ",
    image: story5Image,
    summary: "Toby the turtle teaches us that slow and steady really does win the race.",
    summaryNepali: "टोबी कछुवाले हामीलाई सिकाउँछ कि बिस्तारै र स्थिर गतिले साँच्चै दौड जित्छ।",
    content: `On the edge of a peaceful pond lived an old wise turtle named Toby. Toby was known throughout the forest for being very slow, but also very wise.

One spring morning, Zippy the hare came bouncing by. "Hey Toby!" called Zippy. "Want to race to the big oak tree? I bet I can get there in two minutes!"

All the other animals gathered around. They whispered, "Poor Toby doesn't have a chance against speedy Zippy!"

But Toby just smiled peacefully. "I'd love to race, Zippy. Let's see what happens when we both do our best."

When the race began, Zippy zoomed ahead so fast he was just a blur! Toby started walking at his usual slow, steady pace. Step by step, breath by breath, he kept moving forward.

Zippy was so far ahead that he decided to take a nap under a shady tree. "I have plenty of time," he yawned.

Meanwhile, Toby kept walking. He didn't stop to rest. He didn't give up. He just kept putting one foot in front of the other, enjoying the beautiful flowers and singing birds along the way.

When Zippy woke up, he saw Toby slowly crossing the finish line! All the animals cheered for Toby's patience and determination.

"You taught me something important today," said Zippy, giving Toby a respectful bow. "Being fast isn't everything. Being patient and never giving up is what really counts!"`,
    contentNepali: `एउटा शान्त पोखरीको छेउमा टोबी नामको बुढो बुद्धिमान कछुवा बस्थ्यो। टोबी पूरै जंगलमा धेरै ढिलो तर धेरै बुद्धिमान भएको कारणले प्रसिद्ध थियो।

एक वसन्तको बिहान, जिप्पी खरायो उफ्र्दै आयो। "हे टोबी!" जिप्पीले बोलायो। "ठूलो ओकको रुखसम्म दौड लगाउने? म शर्त गर्छु म दुई मिनेटमा त्यहाँ पुग्न सक्छु!"

अन्य सबै जनावरहरू वरिपरि भेला भए। तिनीहरूले फुसफुसाए, "गरीब टोबीको छिटो जिप्पीसँग कुनै मौका छैन!"

तर टोबीले केवल शान्तिपूर्वक मुस्कुरायो। "म दौड गर्न मन पराउँछु, जिप्पी। हेरौं के हुन्छ जब हामी दुवैले आफ्नो उत्तम प्रयास गर्छौं।"

जब दौड सुरु भयो, जिप्पी यति छिटो अगाडि बढ्यो कि ऊ केवल धमिलो देखियो! टोबीले आफ्नो सामान्य ढिलो, स्थिर गतिमा हिड्न थाल्यो। पाइला पाइला, सास सास गर्दै, ऊ अगाडि बढिरह्यो।

जिप्पी यति धेरै अगाडि थियो कि उसले छायादार रुखमुनि सुत्ने निर्णय गर्यो। "मसँग धेरै समय छ," उसले हाई गर्दै भन्यो।

यसैबीच, टोबीले हिड्न जारी राख्यो। उसले आराम गर्न रोकेन। उसले हार मानेन। उसले केवल एक खुट्टा अर्कोको अगाडि राख्दै, बाटोमा सुन्दर फूलहरू र गाउने चराहरूको आनन्द लिंदै गर्यो।

जब जिप्पी उठ्यो, उसले टोबीलाई बिस्तारै फिनिस लाइन पार गरिरहेको देख्यो! सबै जनावरहरूले टोबीको धैर्य र दृढताका लागि खुसीले जयजयकार गरे।

"तपाईंले मलाई आज केही महत्वपूर्ण सिकाउनुभयो," जिप्पीले टोबीलाई सम्मानजनक झुकाव दिंदै भन्यो। "छिटो हुनु सबै कुरा होइन। धैर्यवान हुनु र कहिल्यै हार नमान्नु नै साँच्चै महत्वपूर्ण छ!"`
  },
  {
    id: 6,
    title: "The Helpful Hedgehog",
    titleNepali: "सहयोगी हेजहग",
    moral: "Helping others brings joy to everyone",
    moralNepali: "अरूलाई मद्दत गर्नुले सबैलाई खुसी दिन्छ",
    image: story6Image,
    summary: "Holly the hedgehog discovers that helping others is the most rewarding thing of all.",
    summaryNepali: "होली हेजहगले पत्ता लगाउँछ कि अरूलाई मद्दत गर्नु सबैभन्दा इनामदायक कुरा हो।",
    content: `In a lovely garden filled with roses and daisies lived a small hedgehog named Holly. Holly had soft brown spines and the kindest heart in the whole garden.

One morning, Holly heard a sad peeping sound coming from near the fountain. She found a tiny baby bird sitting on the ground, looking lost and frightened.

"Oh dear," chirped the little bird. "I fell from my nest and can't find my way home! I'm so scared and don't know what to do."

Holly's heart filled with care for the little bird. "Don't worry," she said gently. "I'll help you find your family!"

Holly looked up at all the tall trees around the garden. There were so many nests! How would she ever find the right one? But Holly didn't give up.

She carefully helped the baby bird onto her back and slowly walked to each tree. At every tree, she called up sweetly, "Hello! Are you missing a little one?"

Finally, at the seventh tree, they heard a joyful response! "My baby! My baby!" called Mama Bird from high above.

Holly helped the little bird climb up to a low branch where Papa Bird could reach down and carry him the rest of the way home.

"Thank you, Holly!" called the whole bird family. "You're our hero!"

That evening, Holly felt warm and happy inside. She had discovered that helping others didn't just make them happy - it made her feel wonderful too! From that day on, Holly became known as the most helpful hedgehog in the garden.`,
    contentNepali: `गुलाब र गुलाफी फूलहरूले भरिएको एउटा सुन्दर बगैंचामा होली नामकी एक सानी हेजहग बस्थी। होलीसँग नरम खैरो काँडाहरू र पूरै बगैंचामा सबैभन्दा दयालु मुटु थियो।

एक बिहान, होलीले फोहराको नजिकबाट आउँदो दुःखी चिच्याहट सुनी। उसले भुइँमा बसेको एक सानो बच्चा चरा भेट्टाई, जो हराएको र डराएको देखिन्थ्यो।

"ओह प्रिय," सानो चराले चियाउँदै भन्यो। "म मेरो गुँडबाट खसेको छु र मेरो घरको बाटो भेट्टाउन सक्दिनँ! म धेरै डराएको छु र के गर्ने थाहा छैन।"

होलीको मुटु सानो चराका लागि ममताले भरियो। "चिन्ता नगर्नुस्," उसले नम्रताका साथ भनी। "म तिमीलाई तिम्रो परिवार भेट्टाउन मद्दत गर्नेछु!"

होलीले बगैंचाका वरिपरिका सबै अग्लो रुखहरूलाई हेरी। त्यहाँ धेरै गुँडहरू थिए! उसले कहिल्यै सही एउटा कसरी भेट्टाउने? तर होलीले हार मानिनी।

उसले होसियारीका साथ बच्चा चरालाई आफ्नो पीठमा राख्न मद्दत गरी र बिस्तारै प्रत्येक रुखमा हिंडी। हरेक रुखमा, उसले मिठो स्वरमा बोलाई, "नमस्ते! के तपाईं सानो एउटा हराइरहनुभएको छ?"

अन्तमा, सातौं रुखमा, तिनीहरूले खुसी जवाफ सुने! "मेरो बच्चा! मेरो बच्चा!" मामा चराले माथिबाट बोलाई।

होलीले सानो चरालाई तल्लो हाँगामा चढ्न मद्दत गरी जहाँ पापा चराले तल पुगेर उसलाई बाँकी बाटो घर लैजान सक्थ्यो।

"धन्यवाद, होली!" पूरै चरा परिवारले बोलायो। "तिमी हाम्रो नायक हौ!"

त्यो साँझ, होली भित्र न्यानो र खुसी महसुस गरी। उसले पत्ता लगाएकी थिई कि अरूलाई मद्दत गर्नुले तिनीहरूलाई मात्र खुसी पारेको थिएन - यसले उसलाई पनि अद्भुत महसुस गराएको थियो! त्यस दिनदेखि, होली बगैंचाकी सबैभन्दा सहयोगी हेजहगको रूपमा चिनिन थालिन्।`
  },
  {
    id: 7,
    title: "The Grateful Duckling",
    titleNepali: "कृतज्ञ हाँसको बच्चा",
    moral: "Gratitude makes life more beautiful",
    moralNepali: "कृतज्ञताले जीवनलाई अझ सुन्दर बनाउँछ",
    image: story7Image,
    summary: "Daisy the duckling learns to appreciate all the good things in her life.",
    summaryNepali: "डेजी हाँसको बच्चाले आफ्नो जीवनमा सबै राम्रा कुराहरूको कदर गर्न सिक्छ।",
    content: `By a sparkling blue pond lived a little duckling named Daisy. Daisy had the most beautiful yellow feathers, but she often forgot to notice all the wonderful things around her.

One rainy day, Daisy was caught in a terrible storm. The wind was howling, and she couldn't find her way back to the pond. She was cold, wet, and very scared.

Just when Daisy thought she might be lost forever, kind Farmer Joe found her shivering under a big leaf. "Oh, you poor little duckling!" he said gently, scooping her up in his warm hands.

Farmer Joe took Daisy to his cozy barn, dried her off with a soft towel, and gave her some warm grain to eat. He made sure she was safe and comfortable until the storm passed.

The next morning was bright and sunny. Farmer Joe walked Daisy back to her pond, where her family was waiting anxiously.

"Daisy!" quacked her mama. "We were so worried about you!"

As Daisy looked around at her beautiful pond, her loving family, the warm sunshine, and thought about Farmer Joe's kindness, her heart felt full of happiness.

"I have so many wonderful things in my life," realized Daisy. "My family loves me, I have a beautiful home, kind friends, and there are good people like Farmer Joe who help when I need it."

From that day on, Daisy made sure to say "thank you" for something good every single day. She thanked the sun for its warmth, her family for their love, and her friends for their laughter. She discovered that being grateful made every day feel like a gift!`,
    contentNepali: `एउटा चम्किलो नीलो पोखरीको छेउमा डेजी नामकी एक सानी हाँसको बच्चा बस्थी। डेजीसँग सबैभन्दा सुन्दर पहेंलो प्वाँखहरू थिए, तर उसले प्रायः आफ्नो वरिपरिका सबै अद्भुत कुराहरू देख्न बिर्सन्थी।

एक वर्षाको दिन, डेजी एक डरलाग्दो आँधीमा फसिन्। हावा चलिरहेको थियो, र उसले पोखरीमा फर्कने बाटो भेट्टाउन सकिनी। उस चिसो, भिजेकी, र धेरै डराएकी थिई।

जब डेजीले सोची कि उस सायद सधैंका लागि हराउने छे, दयालु किसान जोले उसलाई ठूलो पातमुनि काँप्दै भेट्टाए। "ओह, तिमी गरीब सानी हाँसको बच्चा!" उसले नम्रताका साथ भनी, उसलाई आफ्ना न्यानो हातहरूमा उठाउँदै।

किसान जोले डेजीलाई आफ्नो आरामदायक गोठमा लगे, उसलाई नरम तौलियाले सुकाए, र खानका लागि न्यानो अन्न दिए। उसले आँधी बितेसम्म उस सुरक्षित र सहज छ भनेर सुनिश्चित गरे।

भोलिपल्ट बिहान उज्यालो र घामिलो थियो। किसान जोले डेजीलाई उसको पोखरीमा फिर्ता लगे, जहाँ उसको परिवार चिन्तित भएर पर्खिरहेको थियो।

"डेजी!" उसकी आमाले क्वाक गरी। "हामी तिम्रो बारेमा यति चिन्तित थियौं!"

जब डेजीले आफ्नो सुन्दर पोखरी, आफ्नो मायालु परिवार, न्यानो घाम, र किसान जोको दयाको बारेमा सोची, उसको मुटु खुसीले भरियो।

"मेरो जीवनमा धेरै अद्भुत कुराहरू छन्," डेजीले महसुस गरी। "मेरो परिवारले मलाई माया गर्छ, मसँग सुन्दर घर छ, दयालु साथीहरू छन्, र किसान जो जस्ता राम्रा मानिसहरू छन् जसले मलाई आवश्यक पर्दा मद्दत गर्छन्।"

त्यस दिनदेखि, डेजीले हरेक दिन केही राम्रो कुराको लागि "धन्यवाद" भन्न सुनिश्चित गरी। उसले घामलाई यसको न्यानोपनाका लागि, आफ्नो परिवारलाई तिनीहरूको मायाका लागि, र आफ्ना साथीहरूलाई तिनीहरूको हाँसोका लागि धन्यवाद दिई। उसले पत्ता लगाई कि कृतज्ञ हुनुले हरेक दिनलाई उपहार जस्तो महसुस गराउँछ!`
  },
  {
    id: 8,
    title: "The Forgiving Bear",
    titleNepali: "क्षमाशील भालु",
    moral: "Forgiveness heals hearts and strengthens friendships",
    moralNepali: "क्षमाले मुटु निको पार्छ र मित्रतालाई बलियो बनाउँछ",
    image: story8Image,
    summary: "Bruno the bear learns that forgiving others makes everyone feel better.",
    summaryNepali: "ब्रुनो भालुले सिक्छ कि अरूलाई क्षमा गर्नुले सबैलाई राम्रो महसुस गराउँछ।",
    content: `Deep in a peaceful forest lived a big, gentle bear named Bruno. Bruno loved two things most of all: his friends and his delicious honey that he collected from the bees.

Bruno had worked all summer to fill a big pot with the sweetest, most golden honey you could imagine. He was saving it for a special winter treat to share with all his forest friends.

One day, while Bruno was taking a nap, his friend Rascal the raccoon came by to visit. Rascal was always curious about everything, and when he saw the honey pot, he just had to take a closer look.

Rascal climbed up to peek inside, but - CRASH! - he accidentally knocked the whole pot over! All of Bruno's precious honey spilled out onto the forest floor.

When Bruno woke up and saw his honey everywhere, he felt very sad and a little angry. Rascal was crying and apologizing over and over again.

"I'm so sorry, Bruno! I didn't mean to! I was just curious! Please don't hate me!"

Bruno looked at his spilled honey, then at his friend's tears. In his heart, Bruno knew that Rascal hadn't meant to cause trouble. Rascal was just being his naturally curious self.

"Rascal," said Bruno with a warm hug, "I forgive you. Accidents happen, and our friendship is much more important than honey."

Rascal was so touched by Bruno's forgiveness that he spent the next week helping Bruno collect even more honey than before! Their friendship became stronger than ever.

Bruno learned that forgiving others doesn't just make them feel better - it makes your own heart feel lighter and happier too.`,
    contentNepali: `एउटा शान्त जंगलको गहिराइमा ब्रुनो नामको एक ठूलो, नम्र भालु बस्थ्यो। ब्रुनोले दुई कुराहरू सबैभन्दा बढी मन पराउँथ्यो: आफ्ना साथीहरू र आफ्नो स्वादिष्ट मह जुन उसले मौरीहरूबाट संकलन गर्थ्यो।

ब्रुनोले सारा गर्मी काम गरेर एउटा ठूलो भाँडोमा सबैभन्दा मिठो, सुनहरी मह भरेको थियो जसको तपाईं कल्पना गर्न सक्नुहुन्छ। उसले यसलाई आफ्ना सबै जंगलका साथीहरूसँग बाँड्नका लागि विशेष जाडो उपहारको रूपमा बचत गरिरहेको थियो।

एक दिन, जब ब्रुनो सुतिरहेको थियो, उसको साथी र्यास्कल रेकुन भेट्न आयो। र्यास्कल सधैं सबै कुराप्रति जिज्ञासु थियो, र जब उसले महको भाँडो देख्यो, उसले नजिकबाट हेर्नुपर्यो।

र्यास्कल भित्र हेर्न चढ्यो, तर - ठक्क! - उसले गल्तीले पूरै भाँडो ढाली! ब्रुनोको बहुमूल्य मह सबै जंगलको भुइँमा बगियो।

जब ब्रुनो उठ्यो र आफ्नो मह जताततै देख्यो, उसलाई धेरै दुःख र अलिकति रिस उठ्यो। र्यास्कल रोइरहेको थियो र बारम्बार माफी माग्दै थियो।

"मलाई धेरै माफ गर्नुहोस्, ब्रुनो! मेरो मतलब थिएन! म केवल जिज्ञासु थिएँ! कृपया मलाई घृणा नगर्नुहोस्!"

ब्रुनोले आफ्नो बगेको मह हेरे, त्यसपछि आफ्नो साथीका आँसुहरू हेरे। आफ्नो मुटुमा, ब्रुनोलाई थाहा थियो कि र्यास्कलले समस्या सिर्जना गर्ने मतलब थिएन। र्यास्कल केवल आफ्नो प्राकृतिक जिज्ञासु स्वभाव देखाउँदै थियो।

"र्यास्कल," ब्रुनोले न्यानो अँगालो दिँदै भन्यो, "म तिमीलाई क्षमा गर्छु। दुर्घटनाहरू हुन्छन्, र हाम्रो मित्रता महभन्दा धेरै महत्वपूर्ण छ।"

र्यास्कल ब्रुनोको क्षमाले यति छुन्डो भयो कि उसले अर्को हप्ता ब्रुनोलाई पहिलेभन्दा धेरै मह संकलन गर्न मद्दत गर्यो! तिनीहरूको मित्रता पहिलेभन्दा बलियो भयो।

ब्रुनोले सिके कि अरूलाई क्षमा गर्नुले तिनीहरूलाई मात्र राम्रो महसुस गराउँदैन - यसले तपाईंको आफ्नै मुटुलाई पनि हल्का र खुसी बनाउँछ।`
  },
  {
    id: 9,
    title: "The Hardworking Ant",
    titleNepali: "मेहनती कमिला",
    moral: "Hard work and teamwork achieve great things",
    moralNepali: "कडा मेहनत र टिमवर्कले ठूला कुराहरू हासिल गर्छ",
    image: story9Image,
    summary: "Andy the ant shows that with determination and friends, any goal is possible.",
    summaryNepali: "एन्डी कमिलाले देखाउँछ कि दृढता र साथीहरूसँग कुनै पनि लक्ष्य सम्भव छ।",
    content: `In a busy garden lived a determined little ant named Andy. Andy had a big dream - he wanted to build the most amazing anthill that any ant had ever seen!

Every morning, Andy would wake up early and start working. He would carry tiny grains of sand, small pebbles, and bits of leaves to build his anthill. The work was hard, and progress seemed very slow.

Some of the other insects would laugh as they flew by. "Look at Andy," buzzed the lazy grasshopper. "Working so hard on such a tiny hill! Why doesn't he just relax and play like the rest of us?"

But Andy didn't give up. Day after day, grain by grain, his anthill grew a little bit bigger. Even when it rained and washed some of his work away, Andy would start again the next day with a cheerful attitude.

One day, Andy's friend Bella the ant came by and saw how hard he was working. "Andy, this looks like a wonderful project! Can I help?"

Soon, more and more ants joined in. They worked as a team, each one carrying what they could, sharing ideas, and encouraging each other. What had seemed impossible for one ant became possible with many ants working together.

By the end of summer, they had built the most magnificent anthill the garden had ever seen! It had tunnels, rooms, storage areas, and even a beautiful garden on top.

"We did it!" cheered Andy. "But we couldn't have done it without working hard every day and helping each other!"

All the insects who had laughed before now came to admire the amazing anthill. Andy learned that with hard work, patience, and good friends, even the biggest dreams can come true.`,
    contentNepali: `एउटा व्यस्त बगैंचामा एन्डी नामको एक दृढ संकल्पित सानो कमिला बस्थ्यो। एन्डीको एउटा ठूलो सपना थियो - उसले सबैभन्दा अचम्मको चिम्टाको घर बनाउन चाहन्थ्यो जुन कुनै कमिलाले कहिल्यै देखेको थिएन!

हरेक बिहान, एन्डी छिटो उठ्ने र काम सुरु गर्ने गर्थ्यो। उसले आफ्नो चिम्टाको घर बनाउन बालुवाका साना दानाहरू, सानो ढुंगाहरू, र पातका टुक्राहरू बोक्ने गर्थ्यो। काम गाह्रो थियो, र प्रगति धेरै ढिलो देखिन्थ्यो।

केही अन्य कीराहरूले उडेर जाँदा हाँस्ने गर्थे। "एन्डीलाई हेर," अल्छी फड्केले गुनगुनाउँदै भन्यो। "यस्तो सानो पहाडमा यति मेहनत गर्दै! उसले हामी बाँकीहरू जस्तै आराम र खेल किन गर्दैन?"

तर एन्डीले हार मानेन। दिनप्रतिदिन, दाना दाना गर्दै, उसको चिम्टाको घर अलिकति ठूलो हुँदै गयो। वर्षा पर्दा र उसको केही काम बगाएर लगे पनि, एन्डी भोलिपल्ट हर्षित मनोवृत्तिका साथ फेरि सुरु गर्ने गर्थ्यो।

एक दिन, एन्डीको साथी बेला कमिला आई र उसले कति मेहनत गरिरहेको देखी। "एन्डी, यो अद्भुत परियोजना जस्तो देखिन्छ! के म मद्दत गर्न सक्छु?"

चाँडै, अधिक कमिलाहरू सामेल भए। तिनीहरूले टिमको रूपमा काम गरे, प्रत्येकले आफूले सक्दो बोकेर, विचारहरू साझा गरेर, र एकअर्कालाई प्रोत्साहन दिएर। एक कमिलाका लागि असम्भव देखिने कुरा धेरै कमिलाहरूले मिलेर काम गर्दा सम्भव भयो।

गर्मीको अन्त्यसम्ममा, तिनीहरूले बगैंचाले कहिल्यै नदेखेको सबैभन्दा भव्य चिम्टाको घर बनाएका थिए! यसमा सुरुङहरू, कोठाहरू, भण्डारण क्षेत्रहरू, र माथि एउटा सुन्दर बगैंचा समेत थियो।

"हामीले गर्यौं!" एन्डीले खुसीले भन्यो। "तर हामीले हरेक दिन मेहनत गरेर र एकअर्कालाई मद्दत नगरेको भए यो गर्न सक्दैनथ्यौं!"

पहिले हाँसेका सबै कीराहरू अब अचम्मको चिम्टाको घरको प्रशंसा गर्न आए। एन्डीले सिके कि कडा मेहनत, धैर्य, र राम्रा साथीहरूसँग सबैभन्दा ठूला सपनाहरू पनि साकार हुन सक्छन्।`
  },
  {
    id: 10,
    title: "The Friendship Forest",
    titleNepali: "मित्रताको जंगल",
    moral: "True friendship brings magic to life",
    moralNepali: "साँचो मित्रताले जीवनमा जादू ल्याउँछ",
    image: story10Image,
    summary: "All the forest animals discover that friendship is the greatest treasure of all.",
    summaryNepali: "सबै जंगली जनावरहरूले पत्ता लगाउँछन् कि मित्रता सबैभन्दा ठूलो खजाना हो।",
    content: `In a magical forest where the trees sparkled with golden leaves, all the animals lived together happily. There was Ruby the rabbit, Felix the fox, Bruno the bear, Oliver the owl, and Grace the deer.

But one day, a terrible storm came through the forest. The wind was so strong that it knocked down trees and scattered all the animals' homes. When the storm was over, everyone felt sad and lonely.

Ruby's burrow was flooded. Felix's den was blocked by fallen branches. Bruno's cave had rocks covering the entrance. Oliver's tree house was blown away, and Grace's meadow was covered with debris.

Each animal sat alone, feeling sorry for themselves. "I'll never have a nice home again," sighed Ruby. "Everything is ruined," worried Felix.

But then Oliver the wise owl had an idea. "Friends," he called out, "what if we all work together? We could build one big, beautiful home where we can all live together!"

At first, everyone thought this was impossible. How could such different animals live in the same place? But they decided to try.

Ruby was great at digging tunnels. Felix was excellent at finding the perfect building materials. Bruno was strong enough to move heavy rocks. Oliver could see the best spots from high up, and Grace knew where to find the softest moss and prettiest flowers.

Working together, they built the most wonderful home the forest had ever seen! It had cozy underground rooms for Ruby, a perfect den area for Felix, a strong cave section for Bruno, high perches for Oliver, and beautiful garden spaces for Grace.

But the most magical thing happened when they all moved in together. Their home was filled with laughter, stories, songs, and love. They realized that having friends to share everything with made every day an adventure.

From that day on, their forest home became known as the Friendship Forest, where visitors from far and wide came to see how magical life could be when friends care for each other.

"We have the greatest treasure in the world," they all agreed. "We have each other!"`,
    contentNepali: `एउटा जादुई जंगलमा जहाँ रुखहरू सुनहरा पातहरूले चम्किन्थे, सबै जनावरहरू खुसीसँग सँगै बस्थे। त्यहाँ रुबी खरायो, फेलिक्स फ्याउरो, ब्रुनो भालु, ओलिभर उल्लू, र ग्रेस हरिण थिए।

तर एक दिन, जंगलमा एक डरलाग्दो आँधी आयो। हावा यति बलियो थियो कि यसले रुखहरू ढाल्यो र सबै जनावरहरूका घरहरू छरपष्ट पार्यो। जब आँधी सकियो, सबैले दुःख र एक्लोपन महसुस गरे।

रुबीको खाडल बाढीले भरिएको थियो। फेलिक्सको ओड ढलेका हाँगाहरूले बन्द गरेको थियो। ब्रुनोको ओढारको प्रवेशद्वारमा ढुंगाहरूले ढाकेको थियो। ओलिभरको रुखको घर उडाइसकेको थियो, र ग्रेसको घाँसे मैदान भग्नावशेषले ढाकिएको थियो।

हरेक जनावर एक्लै बसे, आफ्नो दुर्दशामा दुःखी भएर। "मसँग फेरि कहिल्यै राम्रो घर हुनेछैन," रुबीले सास फेरी। "सबै कुरा बर्बाद भयो," फेलिक्सले चिन्ता गर्यो।

तर त्यसपछि बुद्धिमान उल्लू ओलिभरको एउटा विचार आयो। "साथीहरू," उसले बोलायो, "के हुन्छ यदि हामी सबै मिलेर काम गर्छौं? हामी एउटा ठूलो, सुन्दर घर बनाउन सक्छौं जहाँ हामी सबै सँगै बस्न सक्छौं!"

सुरुमा, सबैले यो असम्भव ठाने। यस्ता फरक जनावरहरू एकै ठाउँमा कसरी बस्न सक्छन्? तर तिनीहरूले प्रयास गर्ने निर्णय गरे।

रुबी सुरुङ खन्नमा निपुण थिई। फेलिक्स उत्तम निर्माण सामग्री खोज्नमा उत्कृष्ट थियो। ब्रुनो भारी ढुंगाहरू सार्न पर्याप्त बलियो थियो। ओलिभरले माथिबाट उत्तम ठाउँहरू देख्न सक्थ्यो, र ग्रेसलाई सबैभन्दा नरम काई र सुन्दर फूलहरू कहाँ भेट्टाउने थाहा थियो।

सँगै काम गरेर, तिनीहरूले जंगलले कहिल्यै नदेखेको सबैभन्दा अद्भुत घर बनाए! यसमा रुबीका लागि आरामदायक भूमिगत कोठाहरू, फेलिक्सका लागि उत्तम ओड क्षेत्र, ब्रुनोका लागि बलियो गुफा भाग, ओलिभरका लागि उच्च बसाइ, र ग्रेसका लागि सुन्दर बगैंचा ठाउँहरू थिए।

तर सबैभन्दा जादुई कुरा भयो जब तिनीहरू सबै सँगै बसे। तिनीहरूको घर हाँसो, कथाहरू, गीतहरू, र मायाले भरिएको थियो। तिनीहरूले महसुस गरे कि सबै कुरा साझा गर्न साथीहरू हुनुले हरेक दिनलाई साहसिक यात्रा बनाउँछ।

त्यस दिनदेखि, तिनीहरूको जंगलको घर मित्रताको जंगलको रूपमा चिनिन थाल्यो, जहाँ टाढा टाढाका आगन्तुकहरू साथीहरूले एकअर्काको हेरचाह गर्दा जीवन कति जादुई हुन सक्छ भनेर हेर्न आउँथे।

"हामीसँग संसारको सबैभन्दा ठूलो खजाना छ," तिनीहरू सबैले सहमति जनाए। "हामीसँग एकअर्का छ!"`
  },
  {
    id: 11,
    title: "The Joyful Dolphin",
    titleNepali: "खुसी डल्फिन",
    moral: "Happiness is best when shared with others",
    moralNepali: "खुसी अरूसँग बाँड्दा उत्तम हुन्छ",
    image: story11Image,
    summary: "Splash the dolphin learns that sharing joy makes it even more wonderful.",
    summaryNepali: "स्प्लास डल्फिनले सिक्छ कि खुसी बाँड्दा यो अझ अद्भुत हुन्छ।",
    content: `In the sparkling blue ocean lived a playful dolphin named Splash. Splash loved jumping out of the water and doing amazing flips in the air. The feeling of flying made him incredibly happy!

Every day, Splash would practice his jumps alone. He could leap higher than any other dolphin and do the most spectacular spins. But even though he was very skilled, something felt missing.

One morning, while practicing near the coral reef, Splash noticed a group of young fish watching him with wide, amazed eyes. They had never seen such incredible jumps before!

"Wow!" gasped Luna the little fish. "How do you jump so high? It looks like you're flying!"

Splash felt proud, but then he had a wonderful idea. "Would you like me to teach you how to jump?" he asked with a friendly smile.

The little fish were so excited! Even though they couldn't jump as high as Splash, he taught them how to leap out of the water in their own special way. Soon, the whole reef was filled with fish jumping and playing together.

When other sea creatures saw how much fun they were having, they wanted to join too! The seahorses learned to dance through the water, the crabs learned to hop on the ocean floor, and even the shy octopus learned to glide gracefully through the waves.

As Splash watched all his new friends playing and laughing together, his heart felt fuller than ever before. He realized that his amazing jumps were much more wonderful when he shared them with others.

From that day on, Splash's part of the ocean became known as the most joyful place in the sea, where everyone was welcome to play and learn together.

"The best tricks aren't the ones you do alone," Splash learned. "They're the ones you share with friends!"`,
    contentNepali: `चम्किलो नीलो समुद्रमा स्प्लास नामको एक रमाइलो डल्फिन बस्थ्यो। स्प्लासलाई पानीबाट उफ्रिन र हावामा अचम्मका फ्लिप गर्न मनपर्थ्यो। उड्ने अनुभूतिले उसलाई अविश्वसनीय रूपमा खुसी बनाउँथ्यो!

हरेक दिन, स्प्लासले एक्लै आफ्ना उफ्रनेहरूको अभ्यास गर्ने गर्थ्यो। उसले अन्य कुनै डल्फिनभन्दा उच्च उफ्रन सक्थ्यो र सबैभन्दा शानदार घुमाउन सक्थ्यो। तर उस धेरै दक्ष भए पनि, केही कुरा हराएको महसुस हुन्थ्यो।

एक बिहान, कोरल रिफको नजिक अभ्यास गर्दै गर्दा, स्प्लासले साना माछाहरूको समूहलाई फराकिलो, अचम्मित आँखाले उसलाई हेरिरहेको देख्यो। तिनीहरूले पहिले कहिल्यै यस्ता अविश्वसनीय उफ्रनेहरू देखेका थिएनन्!

"वाह!" सानी माछा लुनाले सास फेर्दै भनी। "तिमी कसरी यति उच्च उफ्र्छौ? तिमी उडिरहेको जस्तो देखिन्छ!"

स्प्लासले गर्व महसुस गर्यो, तर त्यसपछि उसको अद्भुत विचार आयो। "के तिमीहरू चाहन्छौ कि म तिमीहरूलाई उफ्रन सिकाउँ?" उसले मित्रवत मुस्कानका साथ सोध्यो।

साना माछाहरू यति उत्साहित भए! तिनीहरूले स्प्लास जत्तिकै उच्च उफ्रन नसके पनि, उसले तिनीहरूलाई आफ्नै विशेष तरिकाले पानीबाट उफ्रन सिकायो। चाँडै, पूरै रिफ माछाहरूले उफ्रिँदै र सँगै खेल्दै भरियो।

जब अन्य समुद्री जीवहरूले देखे कि तिनीहरू कति रमाइलो गरिरहेका छन्, तिनीहरू पनि सामेल हुन चाहन्थे! समुद्री घोडाहरूले पानीमा नाच्न सिके, केकडाहरूले समुद्रको भुइँमा उफ्रन सिके, र लजालु अक्टोपसले पनि छालहरूमा मनमोहक रूपमा ग्लाइड गर्न सिक्यो।

जब स्प्लासले आफ्ना सबै नयाँ साथीहरूलाई सँगै खेल्दै र हाँसिरहेको देख्यो, उसको मुटु पहिलेभन्दा भरिएको महसुस भयो। उसले महसुस गर्यो कि उसका अचम्मका उफ्रनेहरू अरूसँग बाँड्दा धेरै अद्भुत थिए।

त्यस दिनदेखि, स्प्लासको समुद्रको भाग समुद्रको सबैभन्दा खुसीको ठाउँको रूपमा चिनिन थाल्यो, जहाँ सबैलाई सँगै खेल्न र सिक्न स्वागत थियो।

"उत्तम ट्रिकहरू ती होइनन् जो तिमी एक्लै गर्छौ," स्प्लासले सिक्यो। "ती ती हुन् जो तिमी साथीहरूसँग बाँड्छौ!"`
  },
  {
    id: 12,
    title: "The Wise Night Owl",
    titleNepali: "बुद्धिमान रातको उल्लू",
    moral: "Sometimes the best way to help is to listen",
    moralNepali: "कहिलेकाहीं मद्दत गर्ने उत्तम तरिका सुन्नु हो",
    image: story12Image,
    summary: "Oliver the owl discovers that listening can be the most powerful gift of all.",
    summaryNepali: "ओलिभर उल्लूले पत्ता लगाउँछ कि सुन्नु सबैभन्दा शक्तिशाली उपहार हुन सक्छ।",
    content: `High up in an old oak tree lived a wise owl named Oliver. Oliver was known throughout the forest for his deep, thoughtful eyes and his ability to see clearly in the dark.

Every night, as other animals slept, Oliver would sit on his favorite branch and watch over the forest. He loved the peaceful quiet of the nighttime and the way the stars twinkled above.

One evening, Oliver heard soft crying coming from below. He looked down and saw Luna the young rabbit sitting alone under his tree, tears glistening in the moonlight.

Oliver's first thought was to swoop down and give Luna advice about whatever was troubling her. After all, everyone called him wise! But something made him pause.

Instead, Oliver gently called down, "Hello, Luna. I noticed you seem upset. Would you like to talk about what's bothering you?"

Luna looked up with surprise. "Oh, Oliver! I... I'm just feeling so confused about everything. I don't know what to do!"

Oliver settled more comfortably on his branch. "I'm here to listen," he said kindly. "Take all the time you need."

For the next hour, Luna shared all her worries and fears. She talked about feeling small in such a big forest, about making mistakes, and about not knowing if she was good enough. Oliver didn't interrupt or try to fix anything. He just listened with his whole heart.

As Luna talked, something amazing happened. Just by putting her feelings into words and knowing Oliver was truly listening, she began to feel better. By the end of their conversation, Luna had figured out some answers for herself!

"Thank you, Oliver," Luna said with a bright smile. "You helped me so much, and you barely said anything!"

Oliver smiled warmly. "Sometimes the most powerful thing we can give someone is our full attention and a caring heart that listens."

From that night on, many forest animals would visit Oliver, not for advice, but for the gift of being truly heard.`,
    contentNepali: `पुरानो ओकको रुखको माथि ओलिभर नामको एक बुद्धिमान उल्लू बस्थ्यो। ओलिभर आफ्ना गहिरो, विचारशील आँखाहरू र अँध्यारोमा स्पष्ट रूपमा देख्ने क्षमताका लागि पूरै जंगलमा प्रसिद्ध थियो।

हरेक रात, अन्य जनावरहरू सुत्दा, ओलिभर आफ्नो मनपर्ने हाँगामा बसेर जंगलको रेखदेख गर्ने गर्थ्यो। उसलाई रातको शान्त मौनता र माथि तारा चम्कने तरिका मनपर्थ्यो।

एक साँझ, ओलिभरले तलबाट नरम रुवाइ सुन्यो। उसले तल हेर्यो र लुना नाम की जवान खरायोलाई आफ्नो रुखमुनि एक्लै बसेको, चाँदनीमा आँसु चम्किरहेको देख्यो।

ओलिभरको पहिलो विचार तल झरेर लुनालाई उसलाई सताइरहेको जे भए पनि सल्लाह दिने थियो। आखिर, सबैले उसलाई बुद्धिमान भनेका थिए! तर केहिले उसलाई रोक्यो।

बरु, ओलिभरले नम्रताका साथ तल बोलायो, "नमस्ते, लुना। मैले देखेँ कि तिमी दुःखी देखिन्छ्यौ। के तिमी तिमीलाई सताइरहेको कुराको बारेमा कुरा गर्न चाहन्छ्यौ?"

लुनाले अचम्मका साथ माथि हेरी। "ओह, ओलिभर! म... म सबै कुराको बारेमा यति अलमलमा छु। मलाई के गर्ने थाहा छैन!"

ओलिभर आफ्नो हाँगामा अझ आरामसँग बस्यो। "म सुन्न यहाँ छु," उसले दयालुपूर्वक भन्यो। "तिमीलाई चाहिने सबै समय लेऊ।"

अर्को घण्टाका लागि, लुनाले आफ्ना सबै चिन्ता र डरहरू साझा गरी। उसले यति ठूलो जंगलमा सानो महसुस गर्ने, गल्ती गर्ने, र आफू पर्याप्त राम्रो छे कि छैन भन्ने थाहा नहुने बारेमा कुरा गरी। ओलिभरले बाधा पुर्याएन वा केही सुधार गर्ने प्रयास गरेन। उसले केवल आफ्नो पूरै मुटुले सुन्यो।

जब लुनाले कुरा गरी, केही अचम्मको कुरा भयो। केवल आफ्ना भावनाहरूलाई शब्दमा राखेर र ओलिभरले साँच्चै सुनिरहेको जानेर, उसले राम्रो महसुस गर्न थाली। तिनीहरूको कुराकानीको अन्त्यसम्ममा, लुनाले आफैंका लागि केही जवाफहरू फेला पारेकी थिई!

"धन्यवाद, ओलिभर," लुनाले उज्यालो मुस्कानका साथ भनी। "तपाईंले मलाई धेरै मद्दत गर्नुभयो, र तपाईंले केही पनि भन्नुभएन!"

ओलिभरले न्यानो मुस्कान दियो। "कहिलेकाहीं हामीले कसैलाई दिन सक्ने सबैभन्दा शक्तिशाली कुरा हाम्रो पूर्ण ध्यान र सुन्ने हेरचाह गर्ने मुटु हो।"

त्यस रातदेखि, धेरै जंगली जनावरहरू ओलिभरलाई भेट्न आउने गर्थे, सल्लाहका लागि होइन, तर साँच्चै सुनिने उपहारका लागि।`
  },
  {
    id: 13,
    title: "The Curious Kitten",
    titleNepali: "जिज्ञासु बिरालाको बच्चा",
    moral: "Curiosity leads to wonderful discoveries",
    moralNepali: "जिज्ञासाले अद्भुत खोजहरूमा लैजान्छ",
    image: story13Image,
    summary: "Whiskers the kitten learns that asking questions opens up a world of amazing things.",
    summaryNepali: "व्हिस्कर्स बिरालाको बच्चाले सिक्छ कि प्रश्न सोध्नुले अचम्मका कुराहरूको संसार खोल्छ।",
    content: `In a cozy house lived a fluffy orange kitten named Whiskers. Whiskers had the biggest, most curious eyes and was always wondering about everything around him.

"Why does the sun come up every morning?" Whiskers would ask his mama. "How do birds fly so high? What makes the flowers smell so sweet?"

His mama would smile and try to answer, but sometimes she would say, "I don't know everything, Whiskers. Maybe you can find out!"

One day, while exploring the garden, Whiskers noticed something fascinating. A line of ants was marching across the path, each one carrying something on their back.

"Where are you going?" Whiskers asked politely, crouching down to get a closer look.

"We're building our winter home!" replied Annie the ant. "Would you like to see how we work together?"

Whiskers was amazed as he watched the ants cooperate. Each ant had a special job - some gathered food, others built tunnels, and some even stood guard to protect the others.

Later, Whiskers met Bella the butterfly in the flower garden. "How do you get all those beautiful colors?" he asked in wonder.

"It's magic!" Bella laughed, spreading her wings wide. "But actually, it took time. I started as a tiny caterpillar, then I changed in a special cocoon, and finally emerged with these wings!"

As the day went on, Whiskers discovered that every question led to something amazing. He learned about how bees make honey, why cats purr, and how plants grow from tiny seeds.

When evening came, Whiskers curled up next to his mama, his mind buzzing with all the wonderful things he had learned.

"Mama," he purred contentedly, "asking questions is like opening doors to magical rooms I never knew existed!"

His mama nuzzled him gently. "That's right, my curious little one. The world is full of wonders waiting to be discovered by those who dare to ask 'why' and 'how.'"

From that day forward, Whiskers became known as the kitten who could find magic anywhere, simply by being curious about the world around him.`,
    contentNepali: `एउटा आरामदायक घरमा व्हिस्कर्स नामको एक फुलुदार सुन्तले रंगको बिरालाको बच्चा बस्थ्यो। व्हिस्कर्सका सबैभन्दा ठूला, जिज्ञासु आँखाहरू थिए र उस सधैं आफ्नो वरिपरिका सबै कुराहरूको बारेमा सोच्ने गर्थ्यो।

"किन घाम हरेक बिहान उठ्छ?" व्हिस्कर्सले आफ्नी आमालाई सोध्ने गर्थ्यो। "चराहरू कसरी यति उच्च उड्छन्? फूलहरूलाई यति मिठो गन्ध के दिन्छ?"

उसकी आमाले मुस्कुराएर जवाफ दिने कोसिस गर्थिन्, तर कहिलेकाहीं उनी भन्थिन्, "मलाई सबै कुरा थाहा छैन, व्हिस्कर्स। सायद तिमीले पत्ता लगाउन सक्छौ!"

एक दिन, बगैंचामा अन्वेषण गर्दै गर्दा, व्हिस्कर्सले केही मनमोहक कुरा देख्यो। कमिलाहरूको एक लाइन बाटोमा मार्च गरिरहेको थियो, प्रत्येकले आफ्नो पीठमा केही बोकेको थियो।

"तिमीहरू कहाँ जाँदैछौ?" व्हिस्कर्सले विनम्रताका साथ सोध्यो, नजिकबाट हेर्न निहुरेर।

"हामी हाम्रो जाडोको घर बनाइरहेका छौं!" एनी कमिलाले जवाफ दियो। "के तिमी हामी कसरी सँगै काम गर्छौं हेर्न चाहन्छौ?"

व्हिस्कर्स कमिलाहरूले सहयोग गरेको देखेर चकित भयो। हरेक कमिलाको विशेष काम थियो - कसैले खाना जम्मा गर्थ्यो, अरूले सुरुङहरू बनाउथे, र कसैले अरूलाई सुरक्षा दिन पहरा दिन्थे।

पछि, व्हिस्कर्सले फूलको बगैंचामा बेला पुतलीलाई भेट्यो। "तिमीले यी सबै सुन्दर रंगहरू कसरी पायौ?" उसले अचम्मका साथ सोध्यो।

"यो जादू हो!" बेलाले हाँस्दै भनी, आफ्ना पखेटाहरू फराकिलो फैलाउँदै। "तर वास्तवमा, यसले समय लाग्यो। म सानो गुजुरोको रूपमा सुरु भएँ, त्यसपछि म विशेष कोकुनमा परिवर्तन भएँ, र अन्तमा यी पखेटाहरूसहित निस्केँ!"

दिन बित्दै जाँदा, व्हिस्कर्सले पत्ता लगायो कि हरेक प्रश्नले केही अचम्मको कुरामा लैजान्छ। उसले मौरीहरूले कसरी मह बनाउँछन्, बिरालाहरू किन गुर्राउँछन्, र साना बीउबाट बिरुवाहरू कसरी बढ्छन् भन्ने सिक्यो।

जब साँझ आयो, व्हिस्कर्स आफ्नी आमाको छेउमा कुरुक्क भएर बस्यो, उसको दिमाग आफूले सिकेका सबै अद्भुत कुराहरूले भरिएको थियो।

"आमा," उसले सन्तुष्टिका साथ गुर्राउँदै भन्यो, "प्रश्न सोध्नु मैले कहिल्यै नजानेका जादुई कोठाहरूका ढोकाहरू खोल्नु जस्तै हो!"

उसकी आमाले उसलाई नम्रताका साथ माया गरिन्। "त्यो सहि हो, मेरो जिज्ञासु सानो। संसार आश्चर्यहरूले भरिएको छ जो 'किन' र 'कसरी' सोध्ने साहस गर्नेहरूले पत्ता लगाउन पर्खिरहेका छन्।"

त्यस दिनदेखि, व्हिस्कर्स त्यो बिरालाको बच्चाको रूपमा चिनिन थाल्यो जसले आफ्नो वरिपरिको संसारप्रति जिज्ञासु भएर मात्र कहीं पनि जादू फेला पार्न सक्थ्यो।`
  },
  {
    id: 14,
    title: "The Brave Little Mouse",
    titleNepali: "साहसी सानो मुसा",
    moral: "Courage comes in all sizes",
    moralNepali: "साहस सबै आकारमा आउँछ",
    image: story14Image,
    summary: "Pip the mouse proves that being small doesn't mean you can't do big, brave things.",
    summaryNepali: "पिप मुसाले प्रमाणित गर्छ कि सानो हुनुको मतलब तिमी ठूला, साहसी कामहरू गर्न सक्दैनौ भन्ने होइन।",
    content: `In a busy kitchen lived a tiny mouse named Pip. Pip was smaller than all the other mice in the house, and sometimes he felt like he couldn't help with the important things that needed to be done.

One evening, as Pip was gathering crumbs near the stove, he heard a faint chirping sound coming from outside the window. Looking out, he saw a baby bird that had fallen from its nest in the rain.

The little bird was shivering and scared, too weak to fly back to safety. All the other mice shook their heads sadly. "There's nothing we can do," they said. "The window is too high, and the bird is too far from the wall."

But Pip studied the situation carefully. He noticed a long string hanging from a dish towel, and an idea began to form in his small but clever mind.

"I can help!" Pip announced bravely. "I'm small enough to squeeze through the window crack!"

The other mice gasped. "Pip, it's too dangerous! You're so tiny, and it's raining out there!"

But Pip had made up his mind. He grabbed the string in his tiny teeth and squeezed through the narrow gap in the window frame. The rain felt cold and heavy on his little body, but he kept going.

Carefully, Pip lowered the string down to the baby bird. "Grab on!" he called out through the storm. "I'll pull you up to safety!"

It took all of Pip's strength, but slowly, slowly, he managed to pull the baby bird up to the windowsill. From there, he helped the little bird hop inside where it was warm and dry.

All the other mice cheered for Pip! "You saved the day!" they said. "We never would have thought of that solution!"

Pip felt proud and happy. He realized that being small had actually been an advantage - he was the only one who could fit through the window crack to help.

The baby bird chirped gratefully, "Thank you, brave Pip! You may be small, but you have the biggest heart and the most courage I've ever seen!"

From that day on, whenever the mice faced a problem that seemed too big to solve, they would ask, "What would brave little Pip do?" Because they learned that sometimes the smallest among us can accomplish the greatest things.`,
    contentNepali: `एउटा व्यस्त भान्साकोठामा पिप नामको एक सानो मुसा बस्थ्यो। पिप घरका अन्य सबै मुसाहरूभन्दा सानो थियो, र कहिलेकाहीं उसलाई लाग्थ्यो कि उसले गर्नुपर्ने महत्वपूर्ण कामहरूमा मद्दत गर्न सक्दैन।

एक साँझ, जब पिप चुलोको नजिक टुक्राहरू जम्मा गरिरहेको थियो, उसले झ्यालबाहिरबाट कमजोर चिच्याहट सुन्यो। बाहिर हेर्दा, उसले एउटा बच्चा चरा देख्यो जो वर्षामा आफ्नो गुँडबाट खसेको थियो।

सानो चरा काँपिरहेको र डराएको थियो, सुरक्षामा फर्केर उड्न निकै कमजोर थियो। अन्य सबै मुसाहरूले दुःखका साथ टाउको हल्लाए। "हामीले केही गर्न सक्दैनौं," तिनीहरूले भने। "झ्याल धेरै उच्च छ, र चरा भित्ताबाट धेरै टाढा छ।"

तर पिपले स्थितिलाई होसियारीका साथ अध्ययन गर्यो। उसले भाँडा पुछ्ने कपडाबाट झुण्डिएको लामो धागो देख्यो, र उसको सानो तर चतुर दिमागमा एउटा विचार आकार लिन थाल्यो।

"म मद्दत गर्न सक्छु!" पिपले साहसका साथ घोषणा गर्यो। "म झ्यालको दरारबाट निस्कन पर्याप्त सानो छु!"

अन्य मुसाहरूले सास फेरे। "पिप, यो धेरै खतरनाक छ! तिमी यति सानो छौ, र बाहिर वर्षा परिरहेको छ!"

तर पिपले आफ्नो मन बनाइसकेको थियो। उसले आफ्ना सानै दाँतमा धागो समात्यो र झ्यालको फ्रेमको साँघुरो खाडलबाट निस्क्यो। वर्षाले उसको सानो शरीरमा चिसो र भारी महसुस गर्यो, तर उस निरन्तर गइरह्यो।

होसियारीका साथ, पिपले धागो बच्चा चरामा तल झार्यो। "समात!" उसले आँधीको बीचमा बोलायो। "म तिमीलाई सुरक्षामा तान्नेछु!"

यसले पिपको सबै शक्ति लिएको थियो, तर बिस्तारै, बिस्तारै, उसले बच्चा चरालाई झ्यालको किनारमा तान्न सफल भयो। त्यहाँबाट, उसले सानो चरालाई न्यानो र सुक्खा भित्र उफ्रन मद्दत गर्यो।

अन्य सबै मुसाहरूले पिपका लागि जयजयकार गरे! "तिमीले दिन बचायौ!" तिनीहरूले भने। "हामीले त्यो समाधानको बारेमा कहिल्यै सोचेका थिएनौं!"

पिपले गर्व र खुसी महसुस गर्यो। उसले महसुस गर्यो कि सानो हुनु वास्तवमा फाइदा थियो - उस मात्र एक थियो जो मद्दत गर्न झ्यालको दरारमा फिट हुन सक्थ्यो।

बच्चा चराले कृतज्ञताका साथ चिच्यायो, "धन्यवाद, साहसी पिप! तिमी सानो हुन सक्छौ, तर तिमीसँग सबैभन्दा ठूलो मुटु र सबैभन्दा धेरै साहस छ जुन मैले कहिल्यै देखेको छु!"

त्यस दिनदेखि, जहिले पनि मुसाहरूले समाधान गर्न निकै ठूलो देखिने समस्याको सामना गर्थे, तिनीहरू सोध्ने गर्थे, "साहसी सानो पिपले के गर्ने थियो?" किनभने तिनीहरूले सिके कि कहिलेकाहीं हामी मध्ये सबैभन्दा सानोले सबैभन्दा ठूला कामहरू पूरा गर्न सक्छ।`
  },
  {
    id: 15,
    title: "The Colorful Parrot",
    titleNepali: "रंगबिरंगी सुगा",
    moral: "Our differences make the world more beautiful",
    moralNepali: "हाम्रा भिन्नताहरूले संसारलाई अझ सुन्दर बनाउँछ",
    image: story15Image,
    summary: "Rainbow the parrot learns that everyone's unique qualities make life more wonderful.",
    summaryNepali: "रेनबो सुगाले सिक्छ कि सबैका अनोखा गुणहरूले जीवनलाई अझ अद्भुत बनाउँछ।",
    content: `In a lush tropical forest lived a magnificent parrot named Rainbow. Rainbow had the most brilliant feathers you could imagine - bright red, vibrant blue, sunny yellow, and emerald green all mixed together in perfect harmony.

Rainbow was very proud of his beautiful colors, but sometimes he wondered why all the other birds in the forest looked so different from him. The crows were all black, the doves were pure white, and the robins had simple brown bodies with red chests.

One day, Rainbow met a little brown sparrow sitting quietly on a branch. "Why are you so plain?" Rainbow asked, not meaning to be rude. "Wouldn't you rather have bright, beautiful colors like mine?"

The sparrow smiled gently. "My brown feathers help me hide from danger," she explained. "When I sit still, I blend in with the tree bark and stay safe. My colors protect me and my family."

Curious now, Rainbow flew to visit other birds. He met Clara the dove, whose pure white feathers shimmered like snow in the sunlight. "My white feathers represent peace," Clara cooed softly. "When other animals see me, they know I come in friendship, not to cause trouble."

Next, Rainbow encountered Carlos the crow, whose black feathers gleamed like polished stone. "My dark colors help me stay cool in the hot sun," Carlos explained. "They also help me find food at night when other birds are sleeping."

As Rainbow flew through the forest, he began to see how each bird's appearance served a special purpose. The bright red chest of the robin helped her find her mate, the owl's mottled brown and white feathers helped him hunt silently at night, and the hummingbird's iridescent green made her nearly invisible among the leaves.

By evening, Rainbow realized something wonderful. If all the birds looked exactly like him, the forest would be much less interesting! Each bird's unique appearance helped them in their own special way and added something beautiful to the forest.

Rainbow gathered all his bird friends together as the sun was setting. "I used to think my colors made me the most special bird," he said thoughtfully. "But now I understand that we're all special in our own ways. Our differences don't divide us - they make our forest family complete!"

From that day on, Rainbow celebrated every bird he met, appreciating their unique beauty and the special gifts their differences brought to their forest home.

The forest became known as the most harmonious place in the jungle, where every creature was valued for exactly who they were.`,
    contentNepali: `हरियाली उष्णकटिबंधीय जंगलमा रेनबो नामको एक शानदार सुगा बस्थ्यो। रेनबोका सबैभन्दा चम्किलो प्वाँखहरू थिए जसको तपाईं कल्पना गर्न सक्नुहुन्छ - चम्किलो रातो, जीवन्त नीलो, घामी पहेंलो, र पन्ना हरियो सबै उत्तम तालमेलमा मिसिएका।

रेनबो आफ्ना सुन्दर रंगहरूमा धेरै गर्वित थियो, तर कहिलेकाहीं उसले सोच्ने गर्थ्यो कि जंगलका अन्य सबै चराहरू उसभन्दा यति फरक किन देखिन्छन्। काकहरू सबै कालो थिए, ढुकुरहरू सुद्ध सेता थिए, र रबिनहरूका साधारण खैरो शरीर र रातो छाती थियो।

एक दिन, रेनबोले एउटा हाँगामा चुपचाप बसेको सानो खैरो भँगेरालाई भेट्यो। "तिमी किन यति सादा छौ?" रेनबोले सोध्यो, असभ्य हुने मतलब नराखेर। "के तिमी मेरो जस्तै चम्किलो, सुन्दर रंगहरू नचाहिने?"

भँगेराले नम्रताका साथ मुस्कुरायो। "मेरा खैरो प्वाँखहरूले मलाई खतराबाट लुक्न मद्दत गर्छ," उसले व्याख्या गरी। "जब म स्थिर बस्छु, म रुखको बोक्रासँग मिसिन्छु र सुरक्षित रहन्छु। मेरा रंगहरूले मलाई र मेरो परिवारलाई सुरक्षा दिन्छ।"

अब जिज्ञासु भएर, रेनबो अन्य चराहरूलाई भेट्न उड्यो। उसले क्लारा ढुकुरलाई भेट्यो, जसका सुद्ध सेता प्वाँखहरू घाममा हिउँ जस्तै चम्किन्थे। "मेरा सेता प्वाँखहरूले शान्तिको प्रतिनिधित्व गर्छ," क्लाराले नम्रताका साथ कुकुरी। "जब अन्य जनावरहरूले मलाई देख्छन्, तिनीहरूलाई थाहा हुन्छ कि म मित्रतामा आएको हुँ, समस्या सिर्जना गर्न होइन।"

त्यसपछि, रेनबोले कार्लोस काकलाई भेट्यो, जसका कालो प्वाँखहरू पालिस गरिएको ढुंगा जस्तै चम्किन्थे। "मेरा गाढा रंगहरूले मलाई तातो घाममा चिसो रहन मद्दत गर्छ," कार्लोसले व्याख्या गर्यो। "तिनीहरूले मलाई रातमा खाना खोज्न पनि मद्दत गर्छ जब अन्य चराहरू सुतिरहेका हुन्छन्।"

जब रेनबो जंगलमा उड्यो, उसले हेर्न थाल्यो कि हरेक चराको रूपले विशेष उद्देश्य पूरा गर्छ। रबिनको चम्किलो रातो छातीले उसलाई आफ्नो जोडी भेट्टाउन मद्दत गर्यो, उल्लूका दाग भएका खैरो र सेता प्वाँखहरूले उसलाई रातमा चुपचाप शिकार गर्न मद्दत गर्यो, र चुइयाँ चराको इन्द्रेणी हरियोले उसलाई पातहरू बीच लगभग अदृश्य बनायो।

साँझसम्ममा, रेनबोले केही अद्भुत कुरा महसुस गर्यो। यदि सबै चराहरू उसको ठ्याक्कै जस्तै देखिन्थे भने, जंगल धेरै कम रोचक हुने थियो! हरेक चराको अनोखो रूपले तिनीहरूलाई आफ्नै विशेष तरिकामा मद्दत गर्यो र जंगलमा केही सुन्दर थप्यो।

घाम डुब्दै गर्दा रेनबोले आफ्ना सबै चरा साथीहरूलाई भेला गरायो। "मैले पहिले सोचेको थिएँ कि मेरा रंगहरूले मलाई सबैभन्दा विशेष चरा बनाउँछ," उसले विचारशीलताका साथ भन्यो। "तर अब म बुझ्छु कि हामी सबै आ-आफ्नै तरिकामा विशेष छौं। हाम्रा भिन्नताहरूले हामीलाई बाँड्दैन - तिनीहरूले हाम्रो जंगल परिवारलाई पूर्ण बनाउँछ!"

त्यस दिनदेखि, रेनबोले आफूले भेटेका हरेक चराको उत्सव मनायो, तिनीहरूको अनोखो सुन्दरता र तिनीहरूका भिन्नताहरूले आफ्नो जंगलको घरमा ल्याएका विशेष उपहारहरूको कदर गर्दै।

जंगल जङ्गलको सबैभन्दा मेलमिलापको ठाउँको रूपमा चिनिन थाल्यो, जहाँ हरेक प्राणीलाई उनीहरू जस्तै छन् त्यसैका लागि कदर गरिन्थ्यो।`
  },
  {
    id: 16,
    title: "The Playful Penguin",
    titleNepali: "रमाइलो पेन्गुइन",
    moral: "Laughter and play bring joy to everyone",
    moralNepali: "हाँसो र खेलले सबैलाई आनन्द दिन्छ",
    image: story16Image,
    summary: "Waddle the penguin shows how important it is to find fun and laughter every day.",
    summaryNepali: "वाडल पेन्गुइनले देखाउँछ कि हरेक दिन मजा र हाँसो पाउनु कति महत्वपूर्ण छ।",
    content: `On a snowy ice shelf in Antarctica lived a cheerful penguin named Waddle. While all the other penguins spent their days seriously hunting for fish and building their nests, Waddle loved to play games and make everyone laugh.

Every morning, Waddle would slide down the icy hills on his belly, flapping his flippers with pure joy. "Wheee!" he would call out, spinning in circles on the slippery ice. The other penguins would shake their heads and say, "Waddle, you need to be more serious! There's important work to do!"

But Waddle believed that having fun was just as important as work. One particularly cold and cloudy day, when everyone seemed extra grumpy and tired, Waddle had an idea.

"Friends!" he called out to all the penguins. "Let's have a sliding contest! Who can slide the farthest down the hill?"

At first, the older penguins grumbled. "We don't have time for silly games!" they complained. But the younger penguins looked interested, and gradually, one by one, they joined Waddle at the top of the hill.

Soon, the entire colony was laughing and sliding together! Even the grumpiest old penguin, Harold, found himself giggling as he spun around on the ice. The penguins discovered that playing together made them forget all about the cold, gloomy weather.

"This is actually quite fun!" admitted Penelope, one of the most serious penguins. "I feel much warmer and happier!"

After their games, something wonderful happened. All the penguins felt so energized and happy that they worked together more efficiently than ever before. They caught more fish, built better nests, and took care of each other with renewed enthusiasm.

Harold waddled over to Waddle with a big smile. "You were right, young one," he said. "Play isn't just fun - it brings us together and makes everything better!"

From that day on, the penguin colony made sure to include playtime in every day. They played hide-and-seek among the ice formations, had swimming races in the ocean, and invented new sliding games on the snowy hills.

Waddle learned that his gift for bringing joy and laughter was just as valuable as any other skill. The colony became known as the happiest group of penguins in all of Antarctica, where work and play balanced perfectly together.

"Life is too short not to slide down a hill every day!" became Waddle's motto, and soon all the penguins agreed.`,
    contentNepali: `अन्टार्कटिकाको हिउँदार बरफको किनारमा वाडल नामको एक खुसमिजाजी पेन्गुइन बस्थ्यो। जब अन्य सबै पेन्गुइनहरूले आफ्ना दिनहरू गम्भीरताका साथ माछा मार्न र आफ्ना गुँडहरू बनाउन बिताउने गर्थे, वाडललाई खेलहरू खेल्न र सबैलाई हँसाउन मनपर्थ्यो।

हरेक बिहान, वाडलले आफ्नो पेटमा बरफीला पहाडहरूमा चिप्लन्थ्यो, शुद्ध आनन्दका साथ आफ्ना पखेटाहरू फड्काउँदै। "व्ही!" उसले बोलाउने गर्थ्यो, चिप्लो बरफमा गोलाकार घुम्दै। अन्य पेन्गुइनहरूले टाउको हल्लाएर भन्ने गर्थे, "वाडल, तिमी अझ गम्भीर हुनुपर्छ! गर्नुपर्ने महत्वपूर्ण काम छ!"

तर वाडलले विश्वास गर्थ्यो कि मजा गर्नु काम जत्तिकै महत्वपूर्ण छ। एक विशेष चिसो र बादलले घेरिएको दिन, जब सबै अतिरिक्त रिसाएका र थकेका देखिन्थे, वाडलको एउटा विचार आयो।

"साथीहरू!" उसले सबै पेन्गुइनहरूलाई बोलायो। "आउनुस् चिप्लने प्रतियोगिता गरौं! को पहाडमा सबैभन्दा टाढा चिप्लन सक्छ?"

सुरुमा, ठूला पेन्गुइनहरूले गुनासो गरे। "हामीसँग मूर्ख खेलहरूका लागि समय छैन!" तिनीहरूले गुनासो गरे। तर साना पेन्गुइनहरूले चासो देखाए, र बिस्तारै, एक एक गरेर, तिनीहरू पहाडको टुप्पोमा वाडलसँग सामेल भए।

चाँडै, पूरै उपनिवेश सँगै हाँस्दै र चिप्लिरहेको थियो! सबैभन्दा रिसाउने बुढो पेन्गुइन, ह्यारोल्ड पनि, बरफमा घुम्दै गर्दा आफूलाई हाँसिरहेको भेट्टाए। पेन्गुइनहरूले पत्ता लगाए कि सँगै खेल्दा तिनीहरूले चिसो, उदास मौसमको बारेमा सबै कुरा बिर्सिए।

"यो वास्तवमा धेरै रमाइलो छ!" पेनेलोप, सबैभन्दा गम्भीर पेन्गुइन मध्ये एकले स्वीकार गरी। "म धेरै न्यानो र खुसी महसुस गर्छु!"

तिनीहरूका खेलहरूपछि, केही अद्भुत भयो। सबै पेन्गुइनहरूले यति ऊर्जावान र खुसी महसुस गरे कि तिनीहरूले पहिलेभन्दा बढी कुशलताका साथ सँगै काम गरे। तिनीहरूले धेरै माछा समाते, राम्रा गुँडहरू बनाए, र नयाँ उत्साहका साथ एकअर्काको हेरचाह गरे।

ह्यारोल्ड ठूलो मुस्कानका साथ वाडलकहाँ गयो। "तिमी सहि थियौ, जवान," उसले भन्यो। "खेल केवल मजेदार मात्र होइन - यसले हामीलाई एकसाथ ल्याउँछ र सबै कुरा राम्रो बनाउँछ!"

त्यस दिनदेखि, पेन्गुइन उपनिवेशले हरेक दिनमा खेल समय समावेश गर्न सुनिश्चित गर्यो। तिनीहरूले बरफका संरचनाहरू बीच लुकामारी खेले, समुद्रमा पौडी खेल्ने दौड गरे, र हिउँदार पहाडहरूमा नयाँ चिप्लने खेलहरू आविष्कार गरे।

वाडलले सिक्यो कि आनन्द र हाँसो ल्याउने उसको उपहार अन्य कुनै सीप जत्तिकै मूल्यवान थियो। उपनिवेश सम्पूर्ण अन्टार्कटिकामा सबैभन्दा खुसी पेन्गुइनहरूको समूहको रूपमा चिनिन थाल्यो, जहाँ काम र खेल उत्तम रूपमा सन्तुलित थिए।

"जीवन हरेक दिन पहाड तल नचिप्लने गरी छोटो छ!" वाडलको आदर्श वाक्य बन्यो, र चाँडै सबै पेन्गुइनहरू सहमत भए।`
  },
  {
    id: 17,
    title: "The Gentle Lamb",
    titleNepali: "नम्र भेडाको बच्चा",
    moral: "Gentleness is a special kind of strength",
    moralNepali: "नम्रता एक विशेष प्रकारको शक्ति हो",
    image: story17Image,
    summary: "Lily the lamb discovers that being gentle and kind is a powerful way to help others.",
    summaryNepali: "लिली भेडाको बच्चाले पत्ता लगाउँछ कि नम्र र दयालु हुनु अरूलाई मद्दत गर्ने शक्तिशाली तरिका हो।",
    content: `In a peaceful green meadow surrounded by rolling hills lived a young lamb named Lily. Lily had the softest, whitest wool and the gentlest nature of any animal in the meadow. While the other animals were often loud and energetic, Lily preferred to speak softly and move gracefully.

Some of the other animals didn't understand Lily's quiet ways. "Why don't you run around and play rough like the rest of us?" asked Buster the young bull. "You're too gentle! You'll never be strong enough to handle the real world!"

Lily felt hurt by these words, but she remained kind. Deep in her heart, she believed that gentleness was its own kind of strength, even if others couldn't see it.

One windy spring day, a terrible storm swept through the meadow. The rain poured down and the wind howled fiercely. All the animals ran for shelter, but in the chaos, baby chick Peep got separated from her mother and was lost in the tall grass.

Peep was tiny, scared, and shivering in the cold rain. She peeped frantically, but her small voice was lost in the noise of the storm.

When the storm passed, all the animals came out looking for Peep. Buster the bull charged around, stomping heavily and calling loudly, but his big hooves and booming voice only scared Peep more, making her hide deeper in the grass.

The other animals tried too, but their loud searching methods only made the frightened chick more afraid to come out.

Then Lily had an idea. Instead of charging around like the others, she walked very slowly and gently through the meadow. She spoke in the softest, most comforting voice: "Little Peep, don't be afraid. I'm here to help you find your mama. You're safe now."

Peep heard Lily's gentle voice and felt immediately calmer. She peeped softly in response, and Lily followed the sound until she found the tiny chick huddled under a large leaf.

"There you are, sweet little one," Lily whispered, carefully nuzzling Peep with her soft nose. "Let me help you get warm and take you back to your mama."

Lily gently coaxed Peep onto her woolly back, where the frightened chick felt safe and warm. She carried Peep slowly and carefully across the meadow to where her worried mother was waiting.

All the animals watched in amazement as Lily's gentle approach succeeded where all their loud, energetic methods had failed.

"Lily," said Buster the bull, looking ashamed, "I'm sorry I said you weren't strong. Your gentleness saved the day! You were the only one who could help Peep because you understood that sometimes being soft and kind is exactly what someone needs."

From that day on, all the meadow animals understood that Lily's gentleness wasn't a weakness - it was a very special strength that could heal hurts, calm fears, and bring peace to troubled hearts.

Lily became known as the animal that others came to when they needed comfort, understanding, or just someone to listen with a kind heart.`,
    contentNepali: `डाँडाहरूले घेरिएको शान्त हरियो घाँसे मैदानमा लिली नामकी एक जवान भेडाको बच्चा बस्थी। लिलीसँग सबैभन्दा नरम, सबैभन्दा सेतो ऊन र घाँसे मैदानका कुनै पनि जनावरको सबैभन्दा नम्र स्वभाव थियो। जब अन्य जनावरहरू प्रायः चर्को र ऊर्जावान हुन्थे, लिलीले नम्रताका साथ बोल्न र सुन्दर रूपमा हिँड्न रुचाउँथी।

केही अन्य जनावरहरूले लिलीका शान्त तरिकाहरू बुझेनन्। "तिमी किन हामी बाँकीहरू जस्तै दौडिदौडी र कडा खेल खेल्दैनौ?" जवान साँढे बस्टरले सोध्यो। "तिमी धेरै नम्र छ्यौ! तिमी वास्तविक संसारसँग निपट्न पर्याप्त बलियो कहिल्यै हुनेछैनौ!"

लिली यी शब्दहरूले दुःखी भई, तर उस दयालु नै रही। आफ्नो मुटुको गहिराइमा, उसले विश्वास गर्थी कि नम्रता आफैंमा एक प्रकारको शक्ति हो, भले अरूले त्यो देख्न नसकून्।

एक हावाहुरी वसन्तको दिन, घाँसे मैदानमा एक डरलाग्दो आँधी आयो। वर्षा पर्यो र हावा डरलाग्दो रूपमा चल्यो। सबै जनावरहरू आश्रयका लागि दौडे, तर अराजकतामा, बच्चा चल्ला पिप आफ्नी आमाबाट छुट्टिई र अग्लो घाँसमा हरायो।

पिप सानी, डराएकी, र चिसो वर्षामा काँपिरहेकी थिई। उसले उन्मादपूर्वक चिच्याई, तर उसको सानो आवाज आँधीको हल्लामा हराएको थियो।

जब आँधी बित्यो, सबै जनावरहरू पिपलाई खोज्दै बाहिर आए। साँढे बस्टरले वरिपरि दौड्यो, भारी पाइलाले हिँड्दै र चर्को स्वरमा बोलाउँदै, तर उसका ठूला खुट्टाहरू र गर्जने आवाजले पिपलाई झन् डराएको मात्र थियो, उसलाई घाँसमा गहिरो लुकाउन बाध्य पार्दै।

अन्य जनावरहरूले पनि प्रयास गरे, तर तिनीहरूका चर्को खोजी विधिहरूले डराएको चल्लालाई बाहिर आउन अझ डराएको मात्र बनायो।

त्यसपछि लिलीको एउटा विचार आयो। अरू जस्तै दौडिने बदला, उस घाँसे मैदानमा धेरै बिस्तारै र नम्रताका साथ हिँडी। उसले सबैभन्दा नरम, सबैभन्दा सान्त्वनादायक आवाजमा बोली: "सानी पिप, नडराऊ। म तिमीलाई तिम्री आमा भेट्टाउन मद्दत गर्न यहाँ छु। तिमी अब सुरक्षित छ्यौ।"

पिपले लिलीको नम्र आवाज सुनी र तुरुन्तै शान्त महसुस गरी। उसले नम्रताका साथ जवाफमा चिच्याई, र लिलीले त्यो आवाज पछ्याई जबसम्म उसले ठूलो पातमुनि लुकेको सानो चल्ला भेट्टाइनी।

"तिमी यहाँ छ्यौ, मिठो सानी," लिलीले फुसफुसाई, आफ्नो नरम नाकले पिपलाई होसियारीका साथ माया गर्दै। "मलाई तिमीलाई न्यानो पार्न र तिम्री आमाकहाँ फर्काएर लैजान दिऊ।"

लिलीले नम्रताका साथ पिपलाई आफ्नो ऊनी पीठमा राख्न मनाई, जहाँ डराएको चल्लाले सुरक्षित र न्यानो महसुस गर्यो। उसले पिपलाई बिस्तारै र होसियारीका साथ घाँसे मैदान पार गरेर उसकी चिन्तित आमा पर्खिरहेको ठाउँमा लगी।

सबै जनावरहरूले अचम्मका साथ हेरे जब लिलीको नम्र दृष्टिकोणले सफल भयो जहाँ तिनीहरूका सबै चर्को, ऊर्जावान विधिहरू असफल भएका थिए।

"लिली," साँढे बस्टरले लाजका साथ हेर्दै भन्यो, "मैले तिमी बलियो छैनौ भनेकोमा माफ गर्नुहोस्। तिम्रो नम्रताले दिन बचायो! तिमी मात्र एक थियौ जसले पिपलाई मद्दत गर्न सक्यौ किनभने तिमीले बुझ्यौ कि कहिलेकाहीं नरम र दयालु हुनु नै कसैलाई चाहिने कुरा हो।"

त्यस दिनदेखि, घाँसे मैदानका सबै जनावरहरूले बुझे कि लिलीको नम्रता कमजोरी थिएन - यो एक धेरै विशेष शक्ति थियो जसले घाउहरू निको पार्न, डरहरू शान्त पार्न, र व्याकुल मुटुहरूमा शान्ति ल्याउन सक्छ।

लिली त्यो जनावरको रूपमा चिनिन थालिन् जसकहाँ अरूहरू सान्त्वना, बुझाइ, वा केवल दयालु मुटुले सुन्ने कोही चाहिँदा आउने गर्थे।`
  },
  {
    id: 18,
    title: "The Curious Octopus",
    titleNepali: "जिज्ञासु अक्टोपस",
    moral: "Learning never stops when you stay curious",
    moralNepali: "जिज्ञासु रहँदा सिकाइ कहिल्यै रोकिंदैन",
    image: story18Image,
    summary: "Oscar the octopus shows that being curious about everything leads to amazing discoveries.",
    summaryNepali: "ओस्कार अक्टोपसले देखाउँछ कि सबै कुराप्रति जिज्ञासु हुनुले अचम्मका खोजहरूमा लैजान्छ।",
    content: `Deep in the colorful coral reef lived an eight-armed octopus named Oscar. Oscar was different from the other sea creatures because he had an endless curiosity about everything around him. While other octopuses were content to hide in their caves, Oscar wanted to explore every nook and cranny of the ocean.

"Why do seahorses swim upright?" Oscar would wonder aloud. "How do clams make pearls? What makes the water shimmer in different colors?" His questions seemed to have no end!

The older sea creatures would sometimes get annoyed. "Oscar, you ask too many questions!" grumbled Grouchy the grouper fish. "Some things are just the way they are. Stop bothering everyone with your endless curiosity!"

But Oscar couldn't help himself. Every day brought new mysteries to solve and new things to discover. He used his eight arms to gently examine shells, coral formations, and interesting rocks, always being careful not to disturb the reef's delicate balance.

One day, while exploring a part of the reef he'd never seen before, Oscar noticed something troubling. The beautiful coral in this area was turning white and looked very sick. Fish that usually lived here were swimming away, looking for healthier places to call home.

"This is terrible!" Oscar said to himself. "I wonder what's causing this to happen?"

Oscar began investigating with all eight arms working carefully. He tested the water, examined the coral closely, and observed everything happening in the area. His curiosity drove him to spend days learning everything he could about coral health.

Finally, Oscar discovered the problem! A ship had dropped an anchor nearby, and chemicals from the chain were slowly poisoning the water. Oscar had learned enough about ocean chemistry to recognize the signs.

Immediately, Oscar swam to tell the other sea creatures about his discovery. At first, some of them didn't want to listen. "There goes curious Oscar again with another one of his theories," they grumbled.

But when Oscar showed them the evidence he had carefully gathered, they realized he was right! Working together, all the sea creatures helped push the anchor away from the reef and reported the problem to the sea patrol dolphins.

Within weeks, the coral began to return to its healthy, vibrant colors, and the fish came back to their home.

"Oscar," said Grouchy the grouper, looking embarrassed, "I owe you an apology. Your curiosity saved our reef! If you hadn't asked so many questions and learned so much about everything, we might have lost our home."

From that day on, all the sea creatures encouraged Oscar's questions and joined him on his explorations. They realized that Oscar's curiosity wasn't annoying - it was a gift that helped them all understand and protect their underwater world.

Oscar became known as the reef's official "Question Keeper," and young sea creatures would come to him whenever they wondered about something, knowing that together they could discover amazing answers.

"The best way to find answers," Oscar would tell them, "is to never stop asking questions!"`,
    contentNepali: `रंगबिरंगी कोरल रिफको गहिराइमा ओस्कार नामको आठ हाते अक्टोपस बस्थ्यो। ओस्कार अन्य समुद्री जीवहरूभन्दा फरक थियो किनभने उसमा आफ्नो वरिपरिका सबै कुराहरूप्रति अनन्त जिज्ञासा थियो। जब अन्य अक्टोपसहरू आफ्ना गुफाहरूमा लुकेर सन्तुष्ट थिए, ओस्कारले समुद्रको हरेक कुना कन्दराको अन्वेषण गर्न चाहन्थ्यो।

"किन समुद्री घोडाहरू सीधा पौडी खेल्छन्?" ओस्कारले ठूलो स्वरमा सोच्ने गर्थ्यो। "सिपीहरूले मोती कसरी बनाउँछन्? पानीलाई विभिन्न रंगहरूमा चम्काउने के हो?" उसका प्रश्नहरूको कुनै अन्त छैन जस्तो देखिन्थ्यो!

ठूला समुद्री जीवहरू कहिलेकाहीं रिसाउने गर्थे। "ओस्कार, तिमी धेरै प्रश्नहरू सोध्छौ!" ग्राउची ग्रुपर माछाले गुनासो गर्यो। "केही कुराहरू जस्ताका तस्तै हुन्छन्। तिम्रो अनन्त जिज्ञासाले सबैलाई सताउन बन्द गर!"

तर ओस्कारले आफूलाई रोक्न सकेन। हरेक दिनले समाधान गर्नुपर्ने नयाँ रहस्यहरू र पत्ता लगाउनुपर्ने नयाँ कुराहरू ल्याउँथ्यो। उसले आफ्ना आठ हातहरू प्रयोग गरेर नम्रताका साथ शंखहरू, कोरल संरचनाहरू, र रोचक ढुंगाहरू जाँच्ने गर्थ्यो, सधैं रिफको नाजुक सन्तुलनलाई बिगार्न नदिने होसियार राख्दै।

एक दिन, उसले पहिले कहिल्यै नदेखेको रिफको भागको अन्वेषण गर्दै गर्दा, ओस्कारले केही चिन्ताजनक कुरा देख्यो। यस क्षेत्रको सुन्दर कोरल सेतो हुँदै गइरहेको थियो र धेरै बिरामी देखिन्थ्यो। सामान्यतः यहाँ बस्ने माछाहरू घर भन्न मिल्ने स्वस्थ ठाउँहरू खोज्दै तैरेर जाँदै थिए।

"यो भयानक छ!" ओस्कारले आफैंलाई भन्यो। "यो किन भइरहेको होला?"

ओस्कारले आफ्ना आठै हातले होसियारीका साथ काम गरेर अनुसन्धान सुरु गर्यो। उसले पानी परीक्षण गर्यो, कोरललाई नजिकबाट जाँच्यो, र क्षेत्रमा भइरहेका सबै कुराहरू अवलोकन गर्यो। उसको जिज्ञासाले उसलाई कोरलको स्वास्थ्यको बारेमा सक्दो सबै कुरा सिक्न दिनहरू बिताउन प्रेरणा दियो।

अन्तमा, ओस्कारले समस्या पत्ता लगायो! एउटा जहाजले नजिकै लंगर छोडेको थियो, र चेनका रसायनहरूले बिस्तारै पानीलाई विषाक्त बनाइरहेको थियो। ओस्कारले समुद्री रसायन विज्ञानको बारेमा संकेतहरू पहिचान गर्न पर्याप्त सिकेको थियो।

तुरुन्तै, ओस्कार आफ्नो खोजको बारेमा अन्य समुद्री जीवहरूलाई बताउन तैरेर गयो। सुरुमा, तिनीहरूमध्ये केहीले सुन्न चाहेनन्। "फेरि जिज्ञासु ओस्कार आफ्नो अर्को सिद्धान्तको साथ," तिनीहरूले गुनासो गरे।

तर जब ओस्कारले तिनीहरूलाई उसले होसियारीका साथ जम्मा गरेका प्रमाणहरू देखायो, तिनीहरूले महसुस गरे कि उस सहि थियो! सँगै काम गरेर, सबै समुद्री जीवहरूले लंगरलाई रिफबाट टाढा धकेल्न मद्दत गरे र समुद्री गस्ती डल्फिनहरूलाई समस्याको रिपोर्ट गरे।

केही हप्ताभित्रै, कोरल आफ्नो स्वस्थ, जीवन्त रंगहरूमा फर्कन थाल्यो, र माछाहरू आफ्नो घर फर्किए।

"ओस्कार," ग्राउची ग्रुपरले लाजका साथ हेर्दै भन्यो, "म तिमीसँग माफी माग्छु। तिम्रो जिज्ञासाले हाम्रो रिफ बचायो! यदि तिमीले यति धेरै प्रश्नहरू नसोधेको र सबै कुराको बारेमा यति धेरै नसिकेको भए, हामीले हाम्रो घर गुमाएको हुन सक्थ्यो।"

त्यस दिनदेखि, सबै समुद्री जीवहरूले ओस्कारका प्रश्नहरूलाई प्रोत्साहन दिए र उसका अन्वेषणहरूमा सामेल भए। तिनीहरूले महसुस गरे कि ओस्कारको जिज्ञासा कष्टकर थिएन - यो एक उपहार थियो जसले तिनीहरू सबैलाई आफ्नो पानीमुनिको संसारलाई बुझ्न र सुरक्षा गर्न मद्दत गर्यो।

ओस्कार रिफको आधिकारिक "प्रश्न रक्षक" को रूपमा चिनिन थाल्यो, र जवान समुद्री जीवहरू जहिले पनि केही कुराको बारेमा सोच्ने गर्थे, उसकहाँ आउने गर्थे, यो जानेर कि सँगै तिनीहरूले अचम्मका जवाफहरू पत्ता लगाउन सक्छन्।

"जवाफहरू खोज्ने उत्तम तरिका," ओस्कारले तिनीहरूलाई भन्ने गर्थ्यो, "प्रश्नहरू सोध्न कहिल्यै नरोकिनु हो!"`
  },
  {
    id: 19,
    title: "The Joyful Butterfly",
    titleNepali: "खुसी पुतली",
    moral: "Beautiful transformations take time and patience",
    moralNepali: "सुन्दर रूपान्तरणमा समय र धैर्य लाग्छ",
    image: story19Image,
    summary: "Bella the butterfly learns that the most amazing changes happen when we trust the process.",
    summaryNepali: "बेला पुतलीले सिक्छ कि सबैभन्दा अचम्मका परिवर्तनहरू तब हुन्छन् जब हामी प्रक्रियामा भरोसा गर्छौं।",
    content: `In a beautiful garden filled with sunflowers and roses lived a little caterpillar named Bella. Bella spent her days slowly crawling from leaf to leaf, munching contentedly and watching the world around her.

Every day, Bella would look up in wonder at the gorgeous butterflies dancing through the air above her. Their wings sparkled like jewels in the sunlight - orange and black, blue and silver, yellow and red. They moved with such grace and freedom!

"Oh, how I wish I could fly like that!" Bella would sigh. "I'm so slow and plain. All I do is crawl and eat leaves. I'll never be anything special."

One day, a kind butterfly named Grace landed on the flower next to Bella. "Why do you look so sad, little one?" Grace asked gently.

"I wish I could be beautiful and fly like you," Bella confessed. "But I'm just a boring caterpillar. I'll never amount to anything wonderful."

Grace smiled warmly. "Oh, my dear Bella, you have no idea what amazing things are ahead of you! Tell me, have you been feeling very tired lately? Like you want to sleep for a very long time?"

Bella was surprised. "Yes! How did you know? I've been feeling so sleepy, and I have this strange urge to spin myself into something cozy."

"That's wonderful!" Grace exclaimed. "Bella, you're about to begin the most magical transformation of your life. Soon, you'll build a chrysalis - a special sleeping place - and when you wake up, you'll discover something absolutely amazing about yourself."

Bella was curious but also frightened. "What if something goes wrong? What if I'm not brave enough? What if I don't change into anything special?"

"Trust the process, dear one," Grace said softly. "Every butterfly was once a caterpillar who thought she was just ordinary. The magic is already inside you - you just need to give it time to unfold."

Over the next few days, Bella felt the urge growing stronger. Finally, she found the perfect spot on a sturdy branch and began spinning her chrysalis. As she worked, she felt excited but nervous about what was to come.

"See you soon, Bella!" called her garden friends as she sealed herself inside the cozy, protective shell.

For weeks, Bella slept deeply in her chrysalis. She dreamed strange, wonderful dreams of flying and dancing in the air. Sometimes she felt her body changing in mysterious ways, but she trusted that everything was happening as it should.

Then one bright morning, Bella felt ready to emerge. She pushed gently against the walls of her chrysalis until they cracked open, and she stepped out into the sunlight.

But wait - these weren't her little caterpillar legs! She had delicate, beautiful wings painted in the most gorgeous shades of orange and black, with white spots that looked like tiny stars!

"I can fly!" Bella laughed with pure joy as she took her first flight around the garden. All her garden friends cheered as she danced through the air with the same grace she had once admired in others.

Grace the butterfly flew alongside her. "You see, Bella? You were always meant to be beautiful. You just needed to trust the process and give yourself time to transform."

From that day on, Bella shared her story with every worried caterpillar she met, reminding them that the most wonderful changes in life often happen when we have patience and faith in our journey.

"Don't worry about being slow or different," she would tell them. "Your time to shine is coming - you just need to trust and wait for your wings!"`,
    contentNepali: `सूर्यमुखी र गुलाबहरूले भरिएको सुन्दर बगैंचामा बेला नामकी एक सानी गुजुरो बस्थी। बेलाले आफ्ना दिनहरू पातबाट पातमा बिस्तारै घस्रिंदै, सन्तुष्टिका साथ चपाउँदै र आफ्नो वरिपरिको संसार हेर्दै बिताउने गर्थी।

हरेक दिन, बेलाले आश्चर्यका साथ माथि हावामा नाचिरहेका सुन्दर पुतलीहरूलाई हेर्ने गर्थी। तिनीहरूका पखेटाहरू घाममा रत्नहरू जस्तै चम्किन्थे - सुन्तला र कालो, नीलो र चाँदी, पहेंलो र रातो। तिनीहरू यस्तो सुन्दरता र स्वतन्त्रताका साथ हिँड्ने गर्थे!

"ओह, म कसरी तिनीहरू जस्तै उड्न सक्थेँ!" बेलाले सास फेर्ने गर्थी। "म यति ढिलो र सादा छु। म केवल घस्रिन्छु र पातहरू खान्छु। म कहिल्यै केही विशेष हुनेछैन।"

एक दिन, ग्रेस नामकी दयालु पुतली बेलाको छेउको फूलमा बसी। "तिमी किन यति दुःखी देखिन्छ्यौ, सानी?" ग्रेसले नम्रताका साथ सोधी।

"म तिमी जस्तै सुन्दर र उड्न चाहन्छु," बेलाले स्वीकार गरी। "तर म केवल बोरिंग गुजुरो हुँ। म कहिल्यै केही अद्भुत बन्नेछैन।"

ग्रेसले न्यानो मुस्कान दिई। "ओह, मेरी प्रिय बेला, तिमीलाई थाहा छैन कि तिम्रो अगाडि कस्ता अचम्मका कुराहरू छन्! मलाई भन, के तिमी पछिल्लो समय धेरै थकान महसुस गरिरहेकी छ्यौ? जस्तो कि तिमी धेरै लामो समयसम्म सुत्न चाहन्छ्यौ?"

बेला अचम्मित भई। "हो! तिमीलाई कसरी थाहा भयो? म धेरै निद्रालु महसुस गरिरहेकी छु, र मलाई आफूलाई केही आरामदायक कुरामा बेरिने अनौठो इच्छा छ।"

"त्यो अद्भुत छ!" ग्रेसले उत्साहका साथ भनी। "बेला, तिमी आफ्नो जीवनको सबैभन्दा जादुई रूपान्तरण सुरु गर्न लागेकी छ्यौ। चाँडै, तिमी क्रिसालिस बनाउनेछ्यौ - एक विशेष सुत्ने ठाउँ - र जब तिमी उठ्छ्यौ, तिमीले आफ्नो बारेमा केही बिल्कुलै अचम्मको कुरा पत्ता लगाउनेछ्यौ।"

बेला जिज्ञासु तर डराएकी पनि थिई। "के भयो यदि केही गलत भयो? के भयो यदि म पर्याप्त साहसी छैन? के भयो यदि म केही विशेषमा परिवर्तन भइनँ?"

"प्रक्रियामा भरोसा गर, प्रिय," ग्रेसले नम्रताका साथ भनी। "हरेक पुतली कुनै समय गुजुरो थिई जसले सोच्थी कि उस केवल सामान्य छे। जादू पहिले नै तिम्रो भित्र छ - तिमीले केवल यसलाई खुल्न समय दिनुपर्छ।"

अर्का केही दिनहरूमा, बेलाले इच्छा बलियो हुँदै गएको महसुस गरी। अन्तमा, उसले बलियो हाँगामा उत्तम ठाउँ भेट्टाई र आफ्नो क्रिसालिस बुन्न सुरु गरी। जब उसले काम गरी, उसले आउने कुराको बारेमा उत्साहित तर चिन्तित महसुस गरी।

"चाँडै भेटिने, बेला!" उसका बगैंचाका साथीहरूले उसलाई आरामदायक, सुरक्षात्मक खोलभित्र बन्द गर्दै बोलाए।

हप्ताहरूका लागि, बेला आफ्नो क्रिसालिसमा गहिरो सुती। उसले उड्ने र हावामा नाच्ने अनौठा, अद्भुत सपनाहरू देखी। कहिलेकाहीं उसले आफ्नो शरीर रहस्यमय तरिकाले परिवर्तन भएको महसुस गरी, तर उसले भरोसा गरी कि सबै कुरा हुनुपर्ने जस्तै भइरहेको छ।

त्यसपछि एक उज्यालो बिहान, बेलाले निस्कन तयार भएको महसुस गरी। उसले आफ्नो क्रिसालिसका भित्ताहरूमा नम्रताका साथ धकेली जबसम्म तिनीहरू फुट्न नलागे, र उस घाममा बाहिर निस्की।

तर पर्खनुस् - यी उसका सानो गुजुरोका खुट्टाहरू थिएनन्! उससँग नाजुक, सुन्दर पखेटाहरू थिए जो सबैभन्दा सुन्दर सुन्तला र कालो रंगहरूमा रंगिएका थिए, सेता दागहरूसहित जो साना ताराहरू जस्तै देखिन्थे!

"म उड्न सक्छु!" बेलाले शुद्ध आनन्दका साथ हाँसी जब उसले बगैंचाको वरिपरि आफ्नो पहिलो उडान गरी। उसका सबै बगैंचाका साथीहरूले जयजयकार गरे जब उसले हावामा उही सुन्दरताका साथ नाची जुन उसले कुनै समय अरूमा प्रशंसा गरेकी थिई।

ग्रेस पुतली उससँगै उडी। "तिमीले देख्यौ, बेला? तिमी सधैं सुन्दर हुन भनिएकी थियौ। तिमीले केवल प्रक्रियामा भरोसा गर्न र आफूलाई रूपान्तरण हुन समय दिनुपर्ने थियो।"

त्यस दिनदेखि, बेलाले आफूले भेटेकी हरेक चिन्तित गुजुरोसँग आफ्नो कथा साझा गरी, तिनीहरूलाई सम्झाउँदै कि जीवनका सबैभन्दा अद्भुत परिवर्तनहरू प्रायः तब हुन्छन् जब हामीसँग धैर्य र हाम्रो यात्रामा विश्वास हुन्छ।

"ढिलो वा फरक भएकोमा चिन्ता नगर," उसले तिनीहरूलाई भन्ने गर्थी। "तिम्रो चमक्ने समय आउँदैछ - तिमीले केवल भरोसा गर्न र आफ्ना पखेटाहरूको पर्खाइ गर्नुपर्छ!"`
  },
  {
    id: 20,
    title: "The Magical Unicorn",
    titleNepali: "जादुई युनिकर्न",
    moral: "True magic comes from believing in yourself and others",
    moralNepali: "साँचो जादू आफूमा र अरूमा विश्वास गर्नुबाट आउँछ",
    image: story20Image,
    summary: "Stardust the unicorn discovers that the most powerful magic is the ability to believe.",
    summaryNepali: "स्टारडस्ट युनिकर्नले पत्ता लगाउँछ कि सबैभन्दा शक्तिशाली जादू विश्वास गर्ने क्षमता हो।",
    content: `In an enchanted forest where dewdrops sparkled like diamonds and flowers sang gentle melodies, lived a young unicorn named Stardust. Stardust had a beautiful silver horn that was supposed to possess magical powers, but no matter how hard she tried, she couldn't make any magic happen.

All the other unicorns in the forest could perform wonderful magic. Luna could make flowers bloom with a touch of her horn, Aurora could paint rainbows across the sky, and Celestia could heal any wound with her magical light.

Stardust felt left out and discouraged. "What's wrong with me?" she would ask sadly. "I'm supposed to be magical, but my horn doesn't work at all!"

The older unicorns tried to help her. "Just concentrate harder!" they would say. "Focus all your energy into your horn!" But no matter how hard Stardust concentrated, nothing magical ever happened.

One gray morning, Stardust was walking sadly through the forest when she heard a small voice crying for help. Following the sound, she found a tiny field mouse trapped under a fallen branch. The little mouse was scared and hurt.

"Please help me!" squeaked the mouse. "I can't move this heavy branch!"

Without thinking about magic or her horn, Stardust immediately began using her hooves to carefully dig around the branch and push it aside. It was hard work, but she didn't give up until the little mouse was free.

"Thank you so much!" said the grateful mouse. "You saved my life! You're truly magical!"

"But I didn't use any magic," Stardust protested. "I just used my hooves and my determination."

"That IS magic!" the mouse insisted. "You believed you could help me, and you didn't stop trying until you succeeded. That's the most powerful magic of all!"

As Stardust thought about the mouse's words, something wonderful began to happen. A warm, golden light started glowing from her horn - not because she was concentrating or trying to force it, but because her heart was full of joy from helping someone else.

Word of Stardust's rescue spread through the forest. Soon, other animals began coming to her whenever they needed help, not because of magical spells, but because they knew she truly cared and would never give up on them.

One day, a family of rabbits came to Stardust in tears. "Our baby bunny is lost in the Dark Woods," they cried. "It's too scary and dangerous for us to search there alone."

The other unicorns shook their heads sadly. "The Dark Woods block our magic," they explained. "Our powers don't work there."

But Stardust didn't hesitate. "Magic or no magic, we have to try," she said bravely. "Sometimes belief and determination are stronger than any spell."

Stardust led a group of forest animals into the Dark Woods. When their path seemed too dark to navigate, Stardust's belief that they would find the bunny made her horn glow with a gentle light that guided their way. When they encountered scary sounds, her calm confidence helped the others stay brave. When they felt ready to give up, her determination inspired them to keep searching.

Finally, they found the little bunny safe but scared in a hollow log. As they all celebrated together, Stardust's horn blazed with the brightest, most beautiful light the forest had ever seen.

"You see, dear Stardust," said Celestia, the wisest unicorn, "true magic was inside you all along. It's not about having a powerful horn or casting fancy spells. Real magic is believing in yourself, caring for others, and never giving up on what's right."

From that day forward, Stardust became known as the most magical unicorn in the forest, not because she could perform tricks, but because she had learned the secret of true magic: the power of believing in yourself and in the goodness of others.

Young unicorns would come to her to learn magic, and she would always tell them, "The most powerful magic spell is believing that you can make a difference, and then never stopping until you do."`,
    contentNepali: `एउटा मंत्रमुग्ध जंगलमा जहाँ शीतका थोपाहरू हीराहरू जस्तै चम्किन्थे र फूलहरूले नम्र गीतहरू गाउँथे, स्टारडस्ट नामकी एक जवान युनिकर्न बस्थी। स्टारडस्टसँग सुन्दर चाँदीको सिंग थियो जसमा जादुई शक्तिहरू हुनुपर्ने थियो, तर उसले जतिसुकै प्रयास गरे पनि, उसले कुनै जादू गर्न सकिनी।

जंगलका अन्य सबै युनिकर्नहरूले अद्भुत जादू गर्न सक्थे। लुनाले आफ्नो सिंगको स्पर्शले फूलहरू फुलाउन सक्थी, अरोराले आकाशमा इन्द्रेणी रंगाउन सक्थी, र सेलेस्टियाले आफ्नो जादुई प्रकाशले कुनै पनि घाउ निको पार्न सक्थी।

स्टारडस्टले बाहिर र निराश महसुस गरी। "मसँग के गलत छ?" उस दुःखका साथ सोध्ने गर्थी। "म जादुई हुनुपर्ने थिएँ, तर मेरो सिंगले बिल्कुलै काम गर्दैन!"

ठूला युनिकर्नहरूले उसलाई मद्दत गर्ने प्रयास गरे। "केवल झन् कडा एकाग्रता गर!" तिनीहरूले भन्ने गर्थे। "तिम्रो सबै ऊर्जा तिम्रो सिंगमा केन्द्रित गर!" तर स्टारडस्टले जतिसुकै कडा एकाग्रता गरे पनि, कहिल्यै केही जादुई भएन।

एक खैरो बिहान, स्टारडस्ट जंगलमा दुःखका साथ हिँडिरहेकी थिई जब उसले मद्दतको लागि सानो आवाज रोइरहेको सुनी। आवाज पछ्याउँदै, उसले ढलेको हाँगामुनि फसेको सानो मैदानी मुसा भेट्टाई। सानो मुसा डराएको र घाइते थियो।

"कृपया मलाई मद्दत गर्नुहोस्!" मुसाले चिच्यायो। "म यो भारी हाँगा सार्न सक्दिनँ!"

जादू वा आफ्नो सिंगको बारेमा नसोचेर, स्टारडस्टले तुरुन्तै आफ्ना खुट्टाहरू प्रयोग गरेर हाँगाको वरिपरि होसियारीका साथ खन्न र त्यसलाई एकाति सार्न सुरु गरी। यो कडा काम थियो, तर सानो मुसा मुक्त नभएसम्म उसले हार मानिनी।

"धेरै धन्यवाद!" कृतज्ञ मुसाले भन्यो। "तपाईंले मेरो जीवन बचाउनुभयो! तपाईं साँच्चै जादुई हुनुहुन्छ!"

"तर मैले कुनै जादू प्रयोग गरेको छैन," स्टारडस्टले विरोध गरी। "मैले केवल मेरा खुट्टाहरू र मेरो दृढता प्रयोग गरेँ।"

"त्यो नै जादू हो!" मुसाले जिद्दी गर्यो। "तपाईंले मलाई मद्दत गर्न सक्नुहुन्छ भनेर विश्वास गर्नुभयो, र तपाईं सफल नभएसम्म प्रयास बन्द गर्नुभएन। त्यो सबैभन्दा शक्तिशाली जादू हो!"

जब स्टारडस्टले मुसाका शब्दहरूको बारेमा सोची, केही अद्भुत हुन थाल्यो। उसको सिंगबाट न्यानो, सुनहरी प्रकाश चम्कन सुरु भयो - उसले एकाग्रता गरेको वा जबरजस्ती गर्ने प्रयास गरेकोले होइन, तर उसको मुटु अरूलाई मद्दत गरेको आनन्दले भरिएकोले।

स्टारडस्टको उद्धारको कुरा जंगलमा फैलियो। चाँडै, अन्य जनावरहरू जहिले पनि मद्दत चाहिन्थ्यो उसकहाँ आउन थाले, जादुई मन्त्रहरूको कारणले होइन, तर तिनीहरूलाई थाहा थियो कि उस साँच्चै ख्याल राख्छे र तिनीहरूलाई कहिल्यै छोड्दिनी।

एक दिन, खरायोहरूको परिवार आँसुका साथ स्टारडस्टकहाँ आए। "हाम्रो बच्चा खरायो डार्क वुड्समा हराएको छ," तिनीहरूले रोए। "हामीका लागि त्यहाँ एक्लै खोज्न निकै डरलाग्दो र खतरनाक छ।"

अन्य युनिकर्नहरूले दुःखका साथ टाउको हल्लाए। "डार्क वुड्सले हाम्रो जादूलाई रोक्छ," तिनीहरूले व्याख्या गरे। "हाम्रा शक्तिहरूले त्यहाँ काम गर्दैन।"

तर स्टारडस्टले हिचकिचाइनी। "जादू छ वा छैन, हामीले प्रयास गर्नुपर्छ," उसले साहसका साथ भनी। "कहिलेकाहीं विश्वास र दृढता कुनै पनि मन्त्रभन्दा बलियो हुन्छ।"

स्टारडस्टले जंगली जनावरहरूको समूहलाई डार्क वुड्समा डोर्याई। जब तिनीहरूको बाटो नेभिगेट गर्न निकै अँध्यारो देखियो, स्टारडस्टको विश्वास कि तिनीहरूले खरायो भेट्टाउनेछन् भन्नेले उसको सिंगलाई नम्र प्रकाशका साथ चम्काएको जसले तिनीहरूको बाटो देखायो। जब तिनीहरूले डरलाग्दो आवाजहरू सुने, उसको शान्त आत्मविश्वासले अरूलाई साहसी रहन मद्दत गर्यो। जब तिनीहरूले हार मान्न तयार भए, उसको दृढताले तिनीहरूलाई खोजी जारी राख्न प्रेरणा दियो।

अन्तमा, तिनीहरूले सानो खरायोलाई खोक्रो लगमा सुरक्षित तर डराएको भेट्टाए। जब तिनीहरू सबैले सँगै उत्सव मनाए, स्टारडस्टको सिंगले जंगलले कहिल्यै नदेखेको सबैभन्दा चम्किलो, सुन्दर प्रकाशले चम्कायो।

"तिमीले देख्यौ, प्रिय स्टारडस्ट," सबैभन्दा बुद्धिमान युनिकर्न सेलेस्टियाले भनी, "साँचो जादू सुरुदेखि नै तिम्रो भित्र थियो। यो शक्तिशाली सिंग हुनु वा फ्यान्सी मन्त्रहरू गर्नुको बारेमा होइन। वास्तविक जादू आफूमा विश्वास गर्नु, अरूको ख्याल राख्नु, र सही कुरामा कहिल्यै हार नमान्नु हो।"

त्यस दिनदेखि, स्टारडस्ट जंगलकी सबैभन्दा जादुई युनिकर्नको रूपमा चिनिन थालिन्, उसले ट्रिकहरू गर्न सक्थी भन्नेले होइन, तर उसले साँचो जादूको रहस्य सिकेकीले: आफूमा र अरूको भलाइमा विश्वास गर्ने शक्ति।

जवान युनिकर्नहरू जादू सिक्न उसकहाँ आउने गर्थे, र उसले तिनीहरूलाई सधैं भन्ने गर्थी, "सबैभन्दा शक्तिशाली जादुई मन्त्र यो विश्वास गर्नु हो कि तिमी फरक पार्न सक्छौ, र त्यसपछि तिमीले नगरेसम्म कहिल्यै नरोकिनु।"`
  }
];