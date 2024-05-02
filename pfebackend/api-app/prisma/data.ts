import { emitKeypressEvents } from "readline";

export const dataProducts = [
  // cleansers
  {

    productName: "Cleanse Me Softly Milk Cleanser Citrus",
    imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_Sioris_Cleanse-Me-Softly-Citrus_1_400x.jpg?v=1678743529",
    price: 49.99,
    description: "The original Sioris Cleanse Me Softly milk cleanser's citrusy sister! Fresh and organic ingredients are the stars of this soothing milk cleanser/makeup remover. Gentle for even the most sensitive skin, while providing a refreshing and invigorating cleanse without stripping.",
    categoryId:1,

  },
  {

    productName: "Pure Cleansing Oil",
    imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_Manyo-Pure-Cleansing-Oil-1_700x.jpg?v=1625090623",

    price: 70.00,
    description: "Manyo Factorys Pure Cleansing Oil is a slightly acidic (aka low pH), non-irritating cleanser that balances pH levels while also removing blackheads and whiteheads. Formulated with 14 different plant-based oils, including the hydrating argan and stone bean oils, this easily emulsifies into a milky texture that melts makeup, sunscreen and excess sebum.",
    categoryId:1
  },
  {

    productName: "Low pH Cleansing Water",
    imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_PKY_LowpHCleansingWater_700x.jpg?v=1670474181",
    price: 90.00,
    description: "Pyunkang Yul's Low pH Cleansing Water works as a makeup remover, first cleanser and gentle exfoliator. It clarifies and cleanses without irritating the skin or disturbing its delicate moisture barrier. Using naturally-derived ingredients like bitter root extract, tea tree extract and Vitamin C-rich mung bean extract, this multipurpose solution removes oily impurities, sunscreen and makeup from pores while restoring hydration with hyaluronic acid and cell-strengthening ceramides.",
    categoryId:1
  },
 
 
  
  {

    productName: "Rice Water Bright Light Cleansing Oil",
    imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-FaceShop-Rice-Water-Bright-Oil_700x.jpg?v=1473291205",
    price: 66.00,
    description: "Say hello to a Korean cult favorite: Rice Water Bright Light Cleansing Oil from The Face Shop. This fresh and light cleansing oil is perfect for the first step of your nightly double cleanse. Enriched with jojoba oil, it dissolves impurities and makeup from skin while adding extra hydration. The star ingredient, rice bran, naturally clarifies and brightens skin. Free of mineral oil and recommended for all skin types.",
    categoryId:1
  },
  {

    productName: "Ginseng Cleansing Oil",
    imageUrl: "https://ohlolly.com/cdn/shop/products/BeautyofJoseon_GinsengCleansingOil_2_400x.jpg?v=1674516490",
    price: 70.00,
    description: "The Beauty of Joseon Ginseng Cleansing Oil is a first cleanser/makeup remover made with 50% soybean oil and 0.1% ginseng seed oil using the micellar technology. The smooth texture glides over skin to gently yet effectively lift and remove sunscreen, makeup and other oily impurities without clogging the pores.",
    categoryId:1
  },
  // exfoliators
    {

      productName: "Peeling Gel",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_PKY_Peeling-Gel_alt_400x.jpg?v=1674271577",
      price: 90.00,
      description: "Dry, flaky skin. Easily irritated skin. Skin with excessive oil production with frequent blemishes. If any of these conditions describes your skin, Pyunkang Yul's Peeling Gel is for you. This obagi-type exfoliator is made with gentle ingredients including betain salicylate, derived from sugar beets, which effortlessly lifts and rids unwanted skin cells. Allantoin, extracted from comfrey leaves and roots, puts moisture back into skin. Use once or twice a week for a smoother, glowing complexion.",
      categoryId:1
    },
    {

      productName: "Sweet Therapy Scrub Mask",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Huxley-Scrub-Mask-Sweet-Therapy-NEW-1_400x.jpg?v=1606946766",
      price: 90.00,
      description: "A purifying scrub mask made with naturally derived ingredients, Huxley Sweet Therapy Scrub Mask easily sloughs off impurities without drying out skin. Packed with Sahara’s prickly pear cactus extract, which is full of skin-benefiting antioxidants, vitamin E and linoleic acid, Mask warms up on skin during application, creating a gentle heat that reduces swelling and helps draw out impurities. Sucrose and walnut shell powder aid the removal of dead skin cells and other impurities while luffa helps seal in moisture. Great for all skin types, especially those concerned with excess sebum production and clogged pores.",
      categoryId:1
    },
    {

      productName: "Black Rice Soft Peeling Gel",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-HaruHaru-Wonder-Black-Rice-Soft-Peeling-Gel-3_400x.jpg?v=1664497257",
      price: 80.00,
      description: "The perfect solution for dull and lackluster skin, the WONDER Black Rice Soft Peeling Gel gently dissolves and removes dead skin cells with 95% naturally-derived ingredients. The star ingredient is fermented black rice, an antioxidant powerhouse packed with polyphenols and flavonoids, which protects skin against free radicals, like pollution and ultraviolet radiation, and promotes skin cell regeneration. Also formulated with rejuvenating red ginseng extract and collagen-boosting betaine. This exfoliating gel features a smooth texture that spreads easily and leaves skin feeling soft, firm and youthful.",
      categoryId:1
    },
    {

      productName: "AHA 7 Whitehead Power Liquid",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Cosrx-AHA-Power-Liquid-Explained-2_400x.jpg?v=1664495252",
      price: 40.00,
      description: "Whiteheads, excess sebum, congested pores be gone. No frills and just 10 ingredients make the Cosrx AHA 7 Whitehead Power Liquid a one-step solution for troubled skin including persistent acne, hormonal acne, sun damage and hyperpigmentation. The star ingredient is a natural AHA sourced from Pyrus malus (apple) fruit water.",
      categoryId:1
    },
    {

      productName: "Apricot Blossom Peeling Gel",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_Beauty-of-Joseon_Apricot_Blossom_Peeling_Gel2_400x.jpg?v=1708369101",
      price: 40.00,
      description: "A perfect match when you need exfoliation without irritation. The Beauty of Joseon Apricot Blossom Peeling Gel is a plant-based gommage-style exfoliator that grabs onto dead skin cells and gently sloughs off to reveal soft and moisturized skin.",
      categoryId:1
    },
    {

      productName: "Phyto-enzyme Peeling Pad",
      imageUrl: "https://ohlolly.com/cdn/shop/files/Mediheal_Phyto-EnzymePeelingPad_1_700x.jpg?v=1693955222",
      price: 40.00,
      description: "A convenient resurfacing treatment for lifting away dead skin cells to reveal soft, smooth skin. Mediheals Phyto-Enzyme Peeling Pad is a non-abrasive treatment that gently boosts your skin's natural exfoliation process to reduce the signs of aging and improve the appearance of pores.",
      categoryId:1
    },
    {

      productName: "Green Tangerine Vita C Radiance Mask",
      imageUrl: "https://ohlolly.com/cdn/shop/files/Goodal_VitaCGreenTangerineMask_2_400x.jpg?v=1700089528",
      price: 96.00,
      description: "The Goodal Green Tangerine Vita C Radiance Mask combines fresh green tangerine water with green tangerine extract to pack double the vitamin C for a brighter, glowier complexion. It evens out and brightens the skin tone with just one use!.",
      categoryId:1
    },
    // toners
    {

      productName: "Black Rice Hyaluronic Toner for Sensitive Skin",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-HaruHaru-Wonder-Black-Rice-Toner-SM-1_400x.jpg?v=1569072531",
      price: 60.00,
      description: "Haruharu WONDER's best selling toner now comes in a fragrance-free, hypoallergenic formula designed for sensitive skin. Keeping with star ingredients like fermented black rice, hyaluronic acid, ginseng and bamboo shoot extracts, this lightweight toner helps restore elasticity and deep hydration to the skin using patented UDT technology. Tight, dry or irritated skin feels immediate, lasting moisture and plumpness. With a high concentration of antioxidants, this also makes a great first step well-aging product, helping to protect the skin from UV damage and target fine lines.",
      categoryId:1
    },
    {

      productName: "Essence Toner",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Pyunkang-Essence-Toner-4_beecbaee-9dc3-4bae-a021-271520f34c6e_400x.jpg?v=1670474157",
      price: 40.00,
      description: "Pyunkang Yul Essence Toner is an ingenious, richly hydrating formula designed to deliver nutrient-filled moisture to skin. 91.3% of this toner is astragalus membranaceus root extract, full of skin-beneficial betaine and minerals. With the antioxidant, soothing, nutrient-boosting properties of the root extract, this K-beauty favorite toner quickly absorbs to hydrate the skin.",
      categoryId:1
    },
    {

      productName: "Extract It Toner",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Huxley-Extract-It-Toner-1_75107b26-a0dd-449c-b5fb-b9925dcfb037_700x.jpg?v=1627947047",
      price: 50.00,
      description: "A pH balancing toner formulated with more than 90% naturally derived ingredients including certified-organic Sahara cactus seed oil. Huxley Extract It Toner helps to maintain skin’s optimal pH balance while leaving skin clear and hydrated. Hypoallergenic and ultra-mild, Extract It Toner is ideal for all skin types, including those dealing with sensitive skin. The slightly viscous texture leaves skin comforted and smooth.",
      categoryId:1
    },
    {

      productName: "Perfect Daily Mist",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Urang-Perfect-Daily-Mist-2020c_400x.jpg?v=1593565107",
      price: 50.00,
      description: "Mist lovers rejoice. The Urang Daily Mist is your perfect companion to renew and revitalize your skin throughout the day. This mist toner is made with carefully chosen ingredients including 45% neroli water, which is extracted organically from the petals of bitter orange blossoms, and chamomile water. Neroli water not only adds needed hydration back into skin, but it’s a natural anti-aging ingredient. Chamomile water instantly soothes redness and irritation.",
      categoryId:1
    },
    {

      productName: "Full Fit Propolis Synergy Toner",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Cosrx-TonerMasking_400x.jpg?v=1610137423",
      price: 50.00,
      description: "Formulated with 72.6% Black Bee Propolis extract, Cosrx's Full Fit Propolis Synergy Toner is a lightweight but nutrient-dense toner that helps nourish, repair and revive dull, lackluster skin. Its viscous, essence-like consistency quickly absorbs and delivers a high concentration of antibacterial and antioxidant benefits. Skin appears smoother, more radiant and glowing.",
      categoryId:1
    },
    {

      productName: "Hyaluronic Acid Hydra Power Essence",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Cosrx-Hyaluronic-Acid-Hydra-Power-Liquid-1_db93c5df-5c5c-45ac-976c-c63c455ce64c_400x.jpg?v=1568983706",
      price: 40.00,
      description: "Powered by hyaluronic acid, delivered in sea buckthorn water, the Cosrx Hyaluronic Acid Hydra Power Essence is an absolute must for skin suffering from chronic dehydration, rough texture and dryness. Hyaluronic acid, a natural component that exists in our body which acts as a cushion and lubricant, boosts moisture leaving skin supple and smooth. Sea buckthorn water, a repairing and rejuvenating ingredient, works to further hydrate and nourish skin. Without heaviness or irritants, this Power Essence fills the skin with elasticity for healthier, younger looking skin. Made for all skin types.",
      categoryId:1
    },
    // serums

    {

      productName: "Revive Serum : Ginseng + Snail Mucin",
      imageUrl: "https://ohlolly.com/cdn/shop/products/BeautyofJoseon_ReviveSerum_2_400x.jpg?v=1674527908",
      price: 70.00,
      description: "The Beauty of Joseon Revive Serum is made for skin that has lost its vitality and elasticity. It contains ginseng, which has long been used as a nourishing, energizing herbal ingredient, and 3% snail secretion filtrate, which boosts elasticity and hydrates the skin.",
      categoryId:1
    },
    {

      productName: "Green Tangerine Vita C Dark Spot Care Serum Set",
      imageUrl: "https://ohlolly.com/cdn/shop/files/Ohlolly-Goodal-Green-Tangerine-Vita-C-Dark-Spot-Serum-2023-SET_400x.jpg?v=1686694092",
      price: 55.00,
      description: "Renewed, now with doubled the brightening effect in a set! The Goodal Green Tangerine Vita C Dark Spot Care Serum contains 70% fresh green tangerine extract, 4% niacinamide and ascorbyl glucoside. In just two weeks, this wonderworking serum helps combat uneven skin tone and signs of aging including dark spots and fine lines.",
      categoryId:1
    },
    {

      productName: "Advanced Snail 96 Mucin Power Essence",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Cosrx-Advanced-Snail-96-Mucin-Power-Essence-2_400x.jpg?v=1568711331",
      price: 50.00,
      description: "Advanced Snail 96 Mucin Power Essence (96, because 96% of this Essence is snail secretion filtrate) hydrates the skin on a cellular level and promotes healthier skin without heaviness or irritation. Essence fills the skin with elasticity for glowing, younger looking skin. Added nutrients provide intense hydration while strengthening moisture barrier, and repairing any damages. Free of parabens, artificial dye or fragrance.",
      categoryId:1
    },
    {

      productName: "Light It Up Essener",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Sioris_LightItUpEssener_1_400x.jpg?v=1676253521",
      price: 30.00,
      description: "Meet the Sioris Light It Up Essener™. Essence + Toner = Essener! The concentrated, water-like Essener sinks into the skin and works to improve skin tone, elasticity, fine lines and more signs of aging. Enjoy revitalized, bouncy skin with the power of Vitamin C.",
      categoryId:1
    },
    {

      productName: "BHA Blackhead Power Liquid",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Cosrx-BHA-Power-Liquid-4_400x.jpg?v=1664495305",
      price: 70.00,
      description: "Treat and prevent blackheads and blemishes with this powerful solution from Cosrx made with natural BHA. A very light serum-like texture provides a deep cleanse to flush out the clogged pores and reveal a clearer and brighter complexion.",
      categoryId:1
    },
    {

      productName: "Moisture Ampoule",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Dr-Ceuracle-Royal-Vita-Propolis-33-Ampoule-E_400x.jpg?v=1664494556",
      price: 20.00,
      description: "Consisting of only six premium ingredients, Pyunkang Yul Moisture Ampoule is a high-potency moisture booster that calms, smoothens and destresses skin for a glowing complexion. Coptis Japonica Root Extract, a powerful skin-calming and hydrating ingredient, makes up over 90% of this innovative formula. The honey-like consistency grabs onto the surface of skin then melts in for a smooth, soft and bouncy texture.",
      categoryId:1
    },
    {

      productName: "Propolis + Vitamin C, B3, B5, B6 Serum",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_IG_Toun28_Propolis_Serum_ALT_400x.jpg?v=1678403051",
      price: 70.00,
      description: "For lackluster, dull or tired skin, Toun28s Propolis + Vitamin C, B3, B5, B6 serum uses a complex of propolis extract, vitamin and fruit extracts to restore vitality and improve vibrancy. Antioxidant-rich propolis extract soothes, hydrates and softens the skin while providing anti-microbial protection and controlling sebum production. Vitamin C helps defend against UV damage while brightening the complexion for a more even toned skin, and boosting needed collagen production. B Vitamins help reduce the appearance of age spots, lessen redness and other forms of irritation. Its lightweight texture with a faint honey-like scent easily absorbs, leaving a satin finish for skin that appears brighter, more youthful and plump.",
      categoryId:1
    },
    {

      productName: "A Calming Day Ampoule",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Sioris-A-Calming-Day-Ampoule-3_400x.jpg?v=1664495623",
      price: 50.00,
      description: "Lightweight and silky, the Calming Day Ampoule by Sioris provides deep hydration and soothing skin relief. The secret is Sioris' unique combination of essential ingredients that calm irritated skin, soften skins texture, provide ample hydration and effectively manage access sebum production. This low pH (5.41), quick-absorbing formula is designed specifically for sensitive skin types looking to improve skin's moisture levels without heavy, greasy residue.",
     
      categoryId:1
    },
    // moisturizers
    {

      productName: "Nutrition Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Pyunkang-Nutrition-Cream-2_400x.jpg?v=1670474236",
      price: 90.00,
      description: "Pyunkang Yul Nutrient Cream is a luxuriously thick and smooth moisturizer that glides on easily and melts into skin without feeling heavy or greasy. Formulated with safe and gentle skin-beneficial ingredients, this nutrient-rich cream delivers intense hydration that lasts all day. Perfect for those with parched, rough and dull looking skin, Nutrient Cream prevents signs of aging, improves elasticity and boosts skin with youthful radiance."
      ,categoryId:1

    },
    {

      productName: "Rose Ceramide Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Urang-Rose-Ceramide-Cream-2019-A_400x.jpg?v=1574730407",
      price: 50.00,
      description: "Just what your skin needs. With the perfect blend of soothing rose water, nourishing rose flower oil and skin protecting ceramide, Urang Rose Ceramide Cream delivers intense long-lasting moisture for all skin types. Every ingredient used in this nature’s wonder cream is safe and gentle with the EWG rating of 1. Organic rose water hydrates and calms dry, red and irritated skin while Ceramide NP which is ECOCERT certified natural ingredient restores lipids to prevent moisture loss."
     , categoryId:1

    },
    {

      productName: "Deep In A Barrier Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Olivarrier-Comfort-Barrier-Cream-1_400x.jpg?v=1619474413",
      price: 50.00,
      description: "Newly improved and certified by Cosmos Organic, the Sioris Deep In A Barrier Cream is made to deeply hydrate skin with its intensely rich but amazingly absorbent texture. Made with the absolute freshest of natural ingredients including organic yuja water, tamanu oil*, macadamia nut oil, which all work together to rejuvenate and hydrate dry, dull or tired looking skin. Also infused with green tea extract and centella asiatica to help soothe and calm irritated skin. This concentrated moisturizer works overnight leaving skin soft and revitalized. Also excellent used as a day cream for extra dry or dehydrated skin. Use within 6 months of opening. Formerly known as You Look So Young Night Cream."
      ,categoryId:1

    },
    {

      productName: "Oil-Free Ultra-Moisturizing Lotion (with Birch Sap)",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-CosRx-Oil-Free-Moisturizing-Lotion-Birch-Sap-2_5f00514b-8500-4d36-b70f-9db03a8efd2a_400x.jpg?v=1522195068",
      price: 50.00,
      description: "Another winner from best-selling brand Cosrx, Oil-Free Ultra-Moisturizing Lotion is the perfect lightweight moisturizer to maintain balanced and hydrated skin. Instead of water, the star ingredient is birch sap, which makes up 70% of the ingredients. Birch sap is loaded with vitamins and antioxidants that sink deep into skin adding nourishment."
      ,categoryId:1

    },
    {

      productName: "Black Tea Time Reverse Eye Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_PKY_BlackTeaTimeReverseEyeCream_400x.jpg?v=1672952504",
      price: 50.00,
      description: "Harnessing the antioxidant energy from fermented black tea, Pyunkang Yul's Black Tea Time Reverse Eye Cream helps lessen the look of wrinkles and fine lines, carefully softening and strengthening the delicate skin around the eyes. Shea butter and macadamia seed oil also help to restore vitality thanks to a concentration of rich nutrients, vitamins and unsaturated fatty acids. The non-sticky texture absorbs quickly for all-day hydration."
      ,categoryId:3
    },
    {

      productName: "Moisture Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Pyunkang-Moisture-Cream-2_400x.jpg?v=1670474219",
      price: 50.00,
      description: "Pyunkang Yul Moisture cream is a powerfully effective daily moisturizer for all skin types, especially those with sensitive, acne-prone or oily skin. Formulated with safe and gentle ingredients free of fragrance and artificial dyes, the creamy texture goes on smoothly, absorbs easily, providing a soft and supple finish without feeling greasy or sticky. Perfect for sealing in moisture and keeping skin looking radiant and youthful all day long."
      ,categoryId:1

    },
    {

      productName: "Advanced Snail 92 All In One Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Cosrx-Advanced-Snail-92-All-in-one-cream-1_400x.jpg?v=1654238649",
      price: 50.00,
      description: "Advanced Snail 92 All in One Cream provides anti-aging hydration and rejuvenation for all your skins needs. Great for all skin types. This lightweight cream uses all natural ingredients, including its main ingredient of snail mucin (purely separated snail secretion filtrate at 92% content). Advanced Snail Cream provides needed nutrients to the skin to prevent and protect damaged skin."
      ,categoryId:1

    },
    {

      productName: "Lip Sleeping Mask",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Laneige-Lip-Sleeping-Mask_400x.jpg?v=1471635330",
      price: 40.00,
      description: "No matter how much you apply lip balm throughout the day, your lips stay dry, flaky and chapped. Found it. The Laneige Lip Sleeping Mask. This luxurious sleeping mask is made with Moisture Wrap™, a hyaluronic acid mineral network which forms a moisturizing protective film and Berry Mix Complex™, which is rich in Vitamin C to gently exfoliate dry flakes and melt away stubborn dead skin cells. Launched in Korea in spring of 2015, this lip mask has been a cult favorite ever since."
      ,categoryId:2

    },
    // sunscrren


   {

      productName: "Relief Sun: Rice + Probiotics",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_BeautyofJoseon_SunRelief_2_400x.jpg?v=1674526178",
      price: 90.00,
      description: "Relief Sun is a lightweight, creamy, vegan sunscreen that's actually comfortable on skin. It is non-sticky with a semi-dewy finish, providing SPF50+ and PA++++ protection. Containing 30% rice extract and grain fermented extracts rich in vitamins, minerals, and amino acids, it provides moisture, hydration, and nourishment to the skin. Zero white cast!"
      ,categoryId:1
    },
    {

      productName: "Hyaluronic Acid Watery Sun Gel",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Isntree-Watery-Sun-Gel_01_400x.jpg?v=1661972512",
      price: 60.00,
      description: "Isntrees iconic Hyaluronic Acid Watery Sun Gel provides weightless sun protection while delivering long-lasting moisture and hydration for the skin. Formulated with multi-molecular Hyaluronic Acid, plus moisturizing Fig Fruit Extract, soothing Centella Asiatica Extract, nourishing Astaxanthin, Ceramides and more, its lightweight, non-greasy texture immediately absorbs into the skin for SPF 50+ broad-spectrum UV protection without a white cast. Great for all skin types, especially well-suited for sensitive skin."
     , categoryId:1

    },
    {

      productName: "All-around Safe Block Essence Sun Milk EX (SPF 50+ PA+++)",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Missha-All-Around-Safe-Block-Sun-Milk-Essence-EX-1_400x.jpg?v=1670271709",
      price: 70.00,
      description: "Renewed! A moisturizing, non-greasy, non-sticky sunscreen that provides complete protection from harmful UVA/UVB rays and soothes skin irritated by the sun. With a light moisturizing texture, All-around Safe Block Essence Sun Milk EX goes on smoothly and gives a dewy finish without a white cast. Great for all skin types and tones."
     , categoryId:1

    },
    {

      productName: "Heartleaf Silky Moisture Sunscreen",
      imageUrl: "https://ohlolly.com/cdn/shop/files/Anua_HeartleafSilkyMoistureSunscreen_3_400x.jpg?v=1712971896",
      price: 40.00,
      description: "A lightweight, creamy, everyday sunscreen that absorbs quickly without any white cast. Anua Heartleaf Silky Moisture Sunscreen is non-sticky with a semi-dewy finish, providing SPF50+ and PA++++ protection. Containing Heartleaf extract (houttuynia cordata, grown and harvested in Korea), well known for its skin soothing benefits."
      ,categoryId:1

    },

    {

      productName: "Heartleaf Silky Moisture Sunscreen",
      imageUrl: "https://ohlolly.com/cdn/shop/files/Anua_HeartleafSilkyMoistureSunscreen_3_400x.jpg?v=1712971896",
      price: 60.00,
      description: "A lightweight, creamy, everyday sunscreen that absorbs quickly without any white cast. Anua Heartleaf Silky Moisture Sunscreen is non-sticky with a semi-dewy finish, providing SPF50+ and PA++++ protection. Containing Heartleaf extract (houttuynia cordata, grown and harvested in Korea), well known for its skin soothing benefits."
      ,categoryId:1

    },

    {

      productName: "Matte Sun Stick : Mugwort + Camelia (SPF50+ PA++++)",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_Beauty_of_Joseon_Matte-Sun-Stick-6_400x.jpg?v=1680911354",
      price: 70.00,
      description: "Your new best friend for on-the-go SPF application! The Beauty of Joseon Matte Sun Stick: Mugwort + Camelia delivers SPF 50+ PA++++ protection in a convenient stick format for easy application."
     , categoryId:1

    },
    {

      productName: "Houttuynia Cordata Calming Moisture Sun Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_Goodal_CalmingSunCream_1_400x.jpg?v=1677548611",
      price: 40.00,
      description: "SPF 50+ PA++++ for powerful protection from UV rays while soothing sensitive skin. Lightweight and moisturizing, the Goodal Houttuynia Cordata Calming Moisture Sun Cream sinks in deep to provide optimal sun protection."
      ,categoryId:1

    },
    {

      productName: "Ginseng Moist Sun Serum (SPF50+ PA++++)",
      imageUrl: "https://ohlolly.com/cdn/shop/files/Beauty-of-Joseon_Ginseng-Moist-Sun-Serum_6_400x.jpg?v=1684882245",
      price: 30.00,
      description: "The BOJ Ginseng Moist Sun Serum is a gel-type refreshing serum that doubles as a broadspectrum sunscreen. Featuring 30% Ginseng extract and 2 % Niacinamide, it not only guards your skin against sun exposure but also improves skin tone and texture."
      ,categoryId:1

    },
    {

      productName: "ATO Mild Sun Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Pyunkang-Yul-ATO-Mild-Sun-Cream-2_400x.gif?v=1672953472",
      price: 70.00,
      description: "A gentle, yet powerful broad spectrum sunscreen featuring a combination of mineral and chemical UV filters. The PKY ATO Mild Sun Cream uses calming honeysuckle extract, repairing green tea extract and soothing mugwort extract help to fortify the skin's barrier, preventing moisture loss and keeping skin supple, while providing SPF 50+ PA++++ UV protection."
      ,categoryId:1

    },
    {

      productName: "Revive Eye Serum : Ginseng + Retinal",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_BeautyofJoseon_ReviveEyeSerum_2_700x.jpg?v=1675103735",
      price: 45.00,
      description: "The Beauty of Joseon Revive Eye Serum treats, plumps and brightens the delicate skin around the eyes with the power of ginseng extract combined with retinal, a proven wrinkle reducer. Ginseng extract hydrates and boosts, while retinal strengthens the skin barrier and reduces fine lines."
      ,categoryId:3
    },
    {
  
      productName: "Black Pearl & Gold Hydrogel Eye Patch",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_Petitfee_Black_Pearl_Gold_Hydrogel_Eye_Patch.2_700x.jpg?v=1471635109",
      price: 33.00,
      description: "Black Pearl & Gold Hydrogel Eye Patches contain premium ingredients to rejuvenate the tired and dull skin around eyes. Black pearl and gold improve circulation, while green tea, wormwood and tangerine extracts provide moisture and nutrients. Each pack contains 60 sheets soaked in a rich essence."
      ,categoryId:3
    },
    {
  
      productName: "Bulgarian Rose Water Hydrogel Eye Patch",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Heimish_Rose-Hydrogel-Eye-Patch_New_Packaging_1_1080x1350_970d306a-ba97-48f6-9a30-99e3d9b47533_700x.jpg?v=1665535217",
      price: 40.00,
      description: "Tired eyes, dark circles, no more. Heimish's multifunctional Bulgarian Rose Water Hydrogel Eye Patches to the rescue. These soft eye patches improve dark circles under the eyes, while keeping the delicate skin firm and bouncy. The star ingredient, Bulgarian rose water, is full of skin-benefiting vitamins and minerals, plus ultra-hydrating properties. The unique highly elastic hydro-gel material allows essence to fully absorb into skin for maximum benefits."
      ,categoryId:3
    },
    {
  
      productName: "Marine Care Eye Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Heimish-Marine-Care-Eye-Cream-3_700x.jpg?v=1583528320",
      price:20.00,
      description: "Heimish Marine Care Eye Cream harnesses the repairing power of the sea to radically hydrate and lessen the look of wrinkles and fine lines, which often first appear around the eyes. This rich, emollient cream is formulated with fermented seaweed extract and mineral-rich seawater to rejuvenate the delicate eye area. It's also enriched with peptide and plant stem cell extracts to lock in moisture and protect the skin’s natural barrier."
      ,categoryId:3
    },
    {
  
      productName: "Royal Vita Propolis 33 Capsule Eye Cream",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_DrCeuracle_RoyalVitaPropolisEyeCream_700x.jpg?v=1646173546",
      price:30.00,
      description: "A lightweight, serum-like eye cream that immediately revitalizes and nourishes dehydrated, tired and sensitive skin around the eye. Propolis and Royal Jelly extracts hydrate and repair for a brighter, glowing complexion. Antioxidant-rich sea buckthorn fruit extract, Vitamin C and E, plus Collagen all work together to protect and strengthen the moisture barrier. It comes with a golden massage applicator that enhances the cooling, refreshing effect."
      ,categoryId:3
    },
    {

      productName: "Lip Sleeping Mask",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly-Laneige-Lip-Sleeping-Mask-1_700x.jpg?v=1471635330",
      price: 70.00,
      description: "No matter how much you apply lip balm throughout the day, your lips stay dry, flaky and chapped. Found it. The Laneige Lip Sleeping Mask. This luxurious sleeping mask is made with Moisture Wrap™, a hyaluronic acid mineral network which forms a moisturizing protective film and Berry Mix Complex™, which is rich in Vitamin C to gently exfoliate dry flakes and melt away stubborn dead skin cells. Launched in Korea in spring of 2015, this lip mask has been a cult favorite ever since.",
      categoryId:2
    },
    {
  
      productName: "Dailism Lip Gloss",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_Heimish_Lipgloss_1_700x.jpg?v=1673664635",
      price: 40.00,
      description: "Heimishs Dailism Lip Gloss is a perfect way to add a glossy pop to your look. It comes in three shades of pigment for a variety of color pops, while hydrating for a glass-like finish.",
      categoryId:2
    },
    {
  
      productName: "Our Vegan Color Lip Balm Green Pink",
      imageUrl: "https://ohlolly.com/cdn/shop/products/Ohlolly_Manyo_OurVegan_Avocado_700x.jpg?v=1650407932",
      price: 30.00,
      description: "With moisturizing ingredients like avocado extract, broccoli and soothing lingoberry, Our Vegan’s Color Lip Balm helps to repair dry, cracked lips. While it applies green, this balm will adjust to your pH to enhance lips’ natural color for your own unique shade of pink.",
      categoryId:2
    },
    {
  
      productName: "S.O.S. Multi Balm with Tamanu",
      imageUrl: "https://ohlolly.com/cdn/shop/files/Urang-Multibalm-2023-Shop_700x.jpg?v=1689448376",
      price: 50.00,
      description: "Safe and gentle, even for babies, Urang Multi Balm is made of organic seed oils packed with skin-benefiting vitamins and minerals. Vanish dry patches, quicken repairing time for scars including acne scars, moisturize chapped lips, soften dry cuticles or rough elbows with this organic, antioxidant-rich, non-waxy formula. A little goes a long way.",
      categoryId:2
    },
    {
  
      productName: "Rose Quartz Spatula Facial Tool",
      imageUrl: "https://ohlolly.com/cdn/shop/files/Wylys_Spatulas_RoseQuartz_Single_2_700x.jpg?v=1700105000",
      price: 40.00,
      description: "Small but mighty, this beautiful Rose Quartz spatula can be used not only as a spatula for your favorite cosmetics (cleansing balm or moisturizer) but also as a tool to boost circulation to achieve a glowing complexion.",
      categoryId:2
    },
  
    

  

];

export const subcategory= [
  {
    name: "oily skin",
    imageUrl:'https://thekshop.ca/cdn/shop/collections/cosrxgoodmorningcleanser_1024x1024_d8bbde8a-c3d9-4d69-942f-400e13216a13_535x.jpg?v=1636335052',
  },
  {
    name: "sensitive skin ",
    imageUrl :"https://thekshop.ca/cdn/shop/collections/IMG_0467_535x.jpg?v=1636335561",
   
  },
  {
    name: "normal",
    imageUrl:"https://thekshop.ca/cdn/shop/collections/normal_535x.jpg?v=1636335490",
  },
  {
    name: "dry",
    imageUrl :"https://thekshop.ca/cdn/shop/collections/PURITO-deep-sea-pure-water-cream-texture_1024x1024_4a5d6787-a5ac-4601-8f6d-6bf4a1f9c5fe_535x.png?v=1636335161",
  },
  {
    name: "combination",
    imageUrl :"https://thekshop.ca/cdn/shop/collections/93d84992545b6c1fb3eb75f19d3d83ba_535x.jpg?v=1641662426",
    
  },
  
  {
    name: "acne",
    imageUrl :"https://thekshop.ca/cdn/shop/collections/12_1024x1024_e5f7e072-eebd-4bbc-a29c-d55a6579b71e_535x.png?v=1636335737",
    
  },
  
  {
    name: "anti-aging",
    imageUrl :"https://thekshop.ca/cdn/shop/collections/imfrom-ginseng-mask_535x.jpg?v=1659464729",
    
  },
  
  {
    name: "dyness",
    imageUrl :"https://thekshop.ca/cdn/shop/collections/dryness_535x.jpg?v=1636336299",
    
  },
  
  {
    name: "pigmentation",
    imageUrl :"https://thekshop.ca/cdn/shop/products/isntreecniacintoningampoule_535x.jpg?v=1658109058",
    
  },
  
  {
    name: "oil control",
    imageUrl :"https://thekshop.ca/cdn/shop/collections/im-from-vitamin-tree-water-gel-hover_1024x1024_progressive_png_535x.jpg?v=1636336899",
    
  },
   
  {
    name: "sensitivity",
    imageUrl :"https://thekshop.ca/cdn/shop/collections/klairs_blue_535x.jpg?v=1659464234",
    
  },
  
  
]

export const datareview = [
  {
    name: "eya chebbi ",
    content: "vey nice product , I like it ",
    rating: "2",
  },
  {
    name: "Rawaa khabouuchi  ",
    content: "vey awesome product , it helps me so much  ",
    rating: "4",

  },
  {
    name: "Hiba jouini   ",
    content: "its so good  ",
    rating: "3",

  },
  {
    name: "Sliti Marwa   ",
    content: " j'adore ce produit , il m'a sauvé la vie  ",
    rating: "5",

  },
  {
    name: "Hiba jouini   ",
    content: "je vous remercie pour votre professionalisme  ",
    rating: "2",

  },

]

export const datausers = [
  {
    fullname: "eyajouini",
    age: 21,
    adresse: "rue jabaal",
    mobilephone: "23954454"

  }

]

export const dataorders = [
  {

    orderNumber: "2",
    price: 10.000,




  },
]


export const dataproductsTrending = [
  {
    id: 1,
    image: "https://ohlolly.com/cdn/shop/products/Ohlolly-Cosrx-AHA-Whitening-Power-Liquid_700x.jpg?v=1568737121",
    title: "AHA 7 Whitehead Power Liquid",
    previous_price: "14.00",
    current_price: "10.00",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum voluptates ut, quibusdam aliquam ea nisi
      voluptatem qui? Adipisci expedita odit perferendis quam eaque. Aliquam, nemo nam totam est corrupti explicabo.`
  },
  {
    id: 2,
    image: "https://ohlolly.com/cdn/shop/products/Ohlolly-FaceShop-Rice-Water-Bright-Oil_700x.jpg?v=1473291205",
    title: "Clarifying Oil Cleanser",
    previous_price: "30.00",
    current_price: "20.00",
  },
  {
    id: 3,
    image: "https://ohlolly.com/cdn/shop/products/Ohlolly_Hyeja_MatchaMudMask_2_700x.jpg?v=1671855265",
    title: "Vegan Matcha Gentle Mud Cream Mask",
    previous_price: "60.00",
    current_price: "33.00",
  },
  {
    id: 4,
    image: "https://ohlolly.com/cdn/shop/products/Ohlolly_PKY_MoistureSerum_700x.jpg?v=1670474228",
    title: "Moisture Serum",
    previous_price: "27.00",
    current_price: "11.00",
  },

]
export const packs = [
  {
    id: 1,
    image: "https://ohlolly.com/cdn/shop/files/OhlollyKbeautyRoutineKit2024_Oily_400x.jpg?v=1711413427",
    title: "oily skin ",
    price: "90.00",


  },
  {
    id: 2,
    image: "https://ohlolly.com/cdn/shop/files/OhlollyKbeautyRoutineKit2024_Dry_400x.jpg?v=1711412698",
    title: "dry skin ",
    price: "60.00",


  },

  {
    id: 3,
    image: "https://ohlolly.com/cdn/shop/files/OhlollyKbeautyRoutineKit2024_Normal_400x.jpg?v=1711412342",
    title: "normal skin ",
    price: "54.00",


  },

  {
    id: 4,
    image: "https://ohlolly.com/cdn/shop/files/OhlollyKbeautyRoutineKit2024_Combo_400x.jpg?v=1711411555",
    title: "combiantion skin ",
    price: "30.00",


  }


]

export const Arrivals = [
  {
    id: 1,
    image: "https://ohlolly.com/cdn/shop/files/Ohlolly_Dr.Ceuracle_VeganActiveBerryFirstEssence_Sample_1_700x.jpg?v=1712280516",
    title: "Vegan Active Berry First Essence Deluxe Sample ",
    price: "40.00",
  },
  {
    id: 2,
    image: "https://ohlolly.com/cdn/shop/files/Anua_HeartleafSilkyMoistureSunscreen_3_400x.jpg?v=1712971896",
    title: "Heartleaf Silky Moisture Sunscreen",
    price: "30.00",
  },
  {
    id: 3,
    image: "https://ohlolly.com/cdn/shop/files/DrCeuracle_VeganActiveBerryFirstEssence_1_400x.jpg?v=1707247896",
    title: "Vegan Active Berry First Essence ",
    price: "60.00",
  },
  {
    id: 4,
    image: "https://ohlolly.com/cdn/shop/files/Ohlolly_2024DiscoveryKitOne_700x.jpg?v=1708388688",
    title: "Bright + Clear Trio ",
    price: "70.00",
  },
]

 

