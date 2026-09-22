/**
 * =========================================================================
 * PIZZA X20 – SHAHDADPUR ALI CHOWK BRANCH
 * Master Configuration & Content Placeholders
 * =========================================================================
 * EDIT THIS FILE to customize branch phone numbers, prices, address,
 * operating hours, and menu items. No HTML editing required!
 */

window.PIZZA_X20_CONFIG = {
  // Branch & Contact Details (Editable Placeholders)
  branch: {
    brandName: "PIZZA X20",
    branchName: "Shahdadpur Ali Chowk Branch",
    tagline: "Extreme Flavors • 100% Mozzarella • Sizzling Hot Slices",
    subTagline: "The premier pizza experience in Shahdadpur. Hand-tossed dough, premium ingredients, and lightning-fast delivery to your doorstep.",
    
    // CONTACT PLACEHOLDERS (Replace with actual branch numbers)
    phone: "[+92 3XX XXXXXXX]",                 // e.g., "+92 300 1234567"
    phoneClean: "[923XXXXXXXXX]",                // Used for tel: links (digits only)
    whatsapp: "[923XXXXXXXXX]",                  // WhatsApp number without + or spaces (e.g., 923001234567)
    whatsappDisplay: "[+92 3XX XXXXXXX]",        // Display format for WhatsApp
    email: "[branch.shahdadpur@pizzax20.com]",   // Branch email address
    
    // LOCATION & TIMINGS
    address: "[Shop / Plot No.], Main Ali Chowk, Shahdadpur, Sindh, Pakistan",
    landmark: "Near Ali Chowk Landmark, Shahdadpur",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115160.0!2d68.68!3d25.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x394c03b123456789%3A0x0!2sShahdadpur%2C+Sindh!5e0!3m2!1sen!2s!4v1700000000000",
    googleMapsLink: "https://maps.google.com/?q=Ali+Chowk+Shahdadpur+Sindh",
    
    hoursText: "[Daily: 1:00 PM – 2:00 AM]",
    openingHour: 13, // 1:00 PM in 24-hr format
    closingHour: 2,  // 2:00 AM next day
    
    // DELIVERY INFO
    deliveryTime: "[30 – 45 Minutes]",
    deliveryFee: "[PKR XX / Free Delivery on Select Deals]",
    currency: "PKR",
    serviceAreas: [
      "Ali Chowk & Bazaar Area",
      "Station Road & Civil Hospital",
      "College Road & Model Town",
      "Khadim Colony & Gulshan Areas",
      "Tando Adam Road Vicinity",
      "All Surrounding Shahdadpur Sectors"
    ],

    // SOCIAL MEDIA (Replace with branch social links)
    socialLinks: {
      facebook: "https://facebook.com/[your-page-placeholder]",
      instagram: "https://instagram.com/[your-handle-placeholder]",
      tiktok: "https://tiktok.com/@[your-handle-placeholder]"
    }
  },

  // Promo Banner / Active Deal
  activeBanner: {
    badge: "Shahdadpur Branch Exclusive",
    title: "Midnight Cheesy Madness Deal",
    description: "Order any Large Pizza & Get a Free 1.5L Beverage + Garlic Dippers!",
    code: "[CODE: X20CHOWK]",
    validity: "Valid on Dine-in, Takeaway & Delivery"
  },

  // Menu Categories
  categories: [
    { id: "all", name: "Full Menu", icon: "🍕" },
    { id: "featured", name: "Chef's Specials", icon: "⭐" },
    { id: "signature", name: "Signature Pizzas", icon: "🔥" },
    { id: "classic", name: "Classic Pizzas", icon: "✨" },
    { id: "sides", name: "Loaded Sides & Fries", icon: "🍟" },
    { id: "starters", name: "Wings & Appetizers", icon: "🍗" },
    { id: "deals", name: "Value Family Deals", icon: "🎁" },
    { id: "drinks", name: "Beverages & Shakes", icon: "🥤" }
  ],

  // Menu Items Catalog (Structured with clear placeholders)
  menuItems: [
    // --- FEATURED & SIGNATURE PIZZAS ---
    {
      id: "pizza-1",
      category: "signature",
      isFeatured: true,
      badge: "Best Seller",
      name: "[Pizza X20 Royal Supreme]",
      description: "Signature smoked chicken, spicy beef pepperoni, fresh bell peppers, black olives, sweet corn, and double layer of 100% melted mozzarella.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      sizes: {
        small: "[PKR Price - Small 7\"]",
        medium: "[PKR Price - Medium 10\"]",
        large: "[PKR Price - Large 13\"]"
      },
      defaultPriceText: "[PKR Price - Starting from X]",
      spicyLevel: 2,
      tags: ["Signature", "Cheesy", "Loaded"]
    },
    {
      id: "pizza-2",
      category: "signature",
      isFeatured: true,
      badge: "Chef Special",
      name: "[Shahdadpur Tikka Explosion]",
      description: "Desi BBQ chicken chunks tossed in secret spices, caramelized red onions, fresh coriander, green chilies, and creamy signature garlic drizzle.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80",
      sizes: {
        small: "[PKR Price - Small 7\"]",
        medium: "[PKR Price - Medium 10\"]",
        large: "[PKR Price - Large 13\"]"
      },
      defaultPriceText: "[PKR Price - Starting from X]",
      spicyLevel: 3,
      tags: ["Local Favorite", "Spicy BBQ"]
    },
    {
      id: "pizza-3",
      category: "signature",
      isFeatured: true,
      badge: "Cheese Lover",
      name: "[X20 Cheesy Beast Stuffed Crust]",
      description: "Mozzarella and Cheddar filled stuffed golden crust, topped with quadruple cheese blend, oregano herbs, and zesty Italian pizza sauce.",
      image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80",
      sizes: {
        small: "[PKR Price - Small 7\"]",
        medium: "[PKR Price - Medium 10\"]",
        large: "[PKR Price - Large 13\"]"
      },
      defaultPriceText: "[PKR Price - Starting from X]",
      spicyLevel: 0,
      tags: ["Stuffed Crust", "Extra Cheese"]
    },
    {
      id: "pizza-4",
      category: "signature",
      isFeatured: true,
      badge: "Fiery Hot",
      name: "[Spicy Fajita Fiesta]",
      description: "Tender Mexican-style fajita chicken, crisp jalapeño slices, sweet tri-color capsicum, Spanish onions, and red paprika flakes.",
      image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
      sizes: {
        small: "[PKR Price - Small 7\"]",
        medium: "[PKR Price - Medium 10\"]",
        large: "[PKR Price - Large 13\"]"
      },
      defaultPriceText: "[PKR Price - Starting from X]",
      spicyLevel: 3,
      tags: ["Fiery", "Jalapeno"]
    },

    // --- CLASSIC PIZZAS ---
    {
      id: "pizza-5",
      category: "classic",
      isFeatured: false,
      badge: "Classic",
      name: "[Classic Pepperoni Passion]",
      description: "Generous layers of premium beef pepperoni cured to perfection over rich tomato sauce and stretchable real mozzarella cheese.",
      image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
      sizes: {
        small: "[PKR Price - Small 7\"]",
        medium: "[PKR Price - Medium 10\"]",
        large: "[PKR Price - Large 13\"]"
      },
      defaultPriceText: "[PKR Price - Starting from X]",
      spicyLevel: 1,
      tags: ["Beef Pepperoni", "Classic"]
    },
    {
      id: "pizza-6",
      category: "classic",
      isFeatured: false,
      badge: "Traditional",
      name: "[Creamy Malai Boti Delight]",
      description: "Succulent charcoal-grilled white malai boti chicken chunks, mild cream base sauce, mushrooms, and mozzarella blend.",
      image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80",
      sizes: {
        small: "[PKR Price - Small 7\"]",
        medium: "[PKR Price - Medium 10\"]",
        large: "[PKR Price - Large 13\"]"
      },
      defaultPriceText: "[PKR Price - Starting from X]",
      spicyLevel: 1,
      tags: ["Creamy Malai", "Mild"]
    },
    {
      id: "pizza-7",
      category: "classic",
      isFeatured: false,
      badge: "Fresh & Green",
      name: "[Garden Veggie Supreme]",
      description: "Fresh mushrooms, green bell peppers, diced tomatoes, sweet red onions, golden sweet corn, black olives, and herbs.",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?auto=format&fit=crop&w=800&q=80",
      sizes: {
        small: "[PKR Price - Small 7\"]",
        medium: "[PKR Price - Medium 10\"]",
        large: "[PKR Price - Large 13\"]"
      },
      defaultPriceText: "[PKR Price - Starting from X]",
      spicyLevel: 0,
      tags: ["Vegetarian", "Fresh"]
    },

    // --- LOADED SIDES & FRIES ---
    {
      id: "side-1",
      category: "sides",
      isFeatured: false,
      badge: "Fan Favorite",
      name: "[X20 Cheesy Loaded Fries]",
      description: "Crispy golden cut potato fries drenched in molten cheese sauce, shredded chicken chunks, jalapeños, and secret dusting spice.",
      image: "https://images.unsplash.com/photo-1585109649139-366815a0d713?auto=format&fit=crop&w=800&q=80",
      sizes: {
        regular: "[PKR Price - Regular]",
        jumbo: "[PKR Price - Jumbo Platter]"
      },
      defaultPriceText: "[PKR Price]",
      tags: ["Loaded", "Cheesy"]
    },
    {
      id: "side-2",
      category: "sides",
      isFeatured: false,
      badge: "Crunchy",
      name: "[Crispy Garlic Bread with Cheese]",
      description: "Freshly baked artisan baguette slices infused with herb butter, roasted garlic, and melted mozzarella crust.",
      image: "https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80",
      sizes: {
        portion: "[PKR Price - 4 Pcs]"
      },
      defaultPriceText: "[PKR Price]",
      tags: ["Garlic Bread", "Herb Butter"]
    },

    // --- WINGS & APPETIZERS ---
    {
      id: "app-1",
      category: "starters",
      isFeatured: false,
      badge: "Spicy & Tangy",
      name: "[Oven Baked Buffalo Wings]",
      description: "Crispy skin chicken wings tossed in zesty buffalo sauce served with cool homemade ranch dipping sauce.",
      image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=800&q=80",
      sizes: {
        sixPieces: "[PKR Price - 6 Pcs]",
        tenPieces: "[PKR Price - 10 Pcs]"
      },
      defaultPriceText: "[PKR Price]",
      tags: ["Wings", "Spicy"]
    },
    {
      id: "app-2",
      category: "starters",
      isFeatured: false,
      badge: "Snack Hit",
      name: "[Crispy Golden Chicken Nuggets]",
      description: "Tender white chicken bites coated in golden crunchy crumb breading with honey mustard dip.",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
      sizes: {
        sixPieces: "[PKR Price - 6 Pcs]",
        twelvePieces: "[PKR Price - 12 Pcs]"
      },
      defaultPriceText: "[PKR Price]",
      tags: ["Kids Favorite", "Snack"]
    },

    // --- VALUE DEALS ---
    {
      id: "deal-1",
      category: "deals",
      isFeatured: true,
      badge: "Super Saver",
      name: "[Ali Chowk Family Feast Deal]",
      description: "2 Large Signature Pizzas + 1 Regular Cheesy Fries + 10 Pcs Wings + 1.5L Chilled Soft Drink.",
      image: "https://images.unsplash.com/photo-1544982503-9f984c14501a?auto=format&fit=crop&w=800&q=80",
      sizes: {
        bundle: "[PKR Price - Family Bundle]"
      },
      defaultPriceText: "[PKR Price - Combo]",
      tags: ["Family Feast", "Best Value"]
    },
    {
      id: "deal-2",
      category: "deals",
      isFeatured: false,
      badge: "Duo Deal",
      name: "[Shahdadpur Buddy Combo]",
      description: "1 Medium Pizza of your choice + 1 Cheesy Garlic Bread + 2 Cold Drink Cans.",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
      sizes: {
        bundle: "[PKR Price - Duo Combo]"
      },
      defaultPriceText: "[PKR Price - Combo]",
      tags: ["For Two", "Combo"]
    },

    // --- BEVERAGES & DRINKS ---
    {
      id: "drink-1",
      category: "drinks",
      isFeatured: false,
      badge: "Chilled",
      name: "[Chilled Soft Drinks (Selection)]",
      description: "Cold & refreshing: Pepsi, 7Up, Mirinda, Mountain Dew (500ml / 1.5L bottles or chilled cans).",
      image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=800&q=80",
      sizes: {
        can: "[PKR Price - 345ml Can]",
        bottle500: "[PKR Price - 500ml]",
        bottle1500: "[PKR Price - 1.5L]"
      },
      defaultPriceText: "[PKR Price]",
      tags: ["Chilled", "Beverage"]
    }
  ],

  // Why Choose Us Pillars
  whyChooseUs: [
    {
      icon: "🍕",
      title: "Fresh Hand-Tossed Dough",
      description: "Kneaded fresh every morning in our Shahdadpur kitchen with premium flour and left to ferment naturally for the ultimate airy, crispy crust."
    },
    {
      icon: "🧀",
      title: "100% Pure Mozzarella",
      description: "No artificial blends or cheese substitutes. We use genuine stringy mozzarella that melts into an irresistible stretch with every bite."
    },
    {
      icon: "⚡",
      title: "Hot & Fast Local Delivery",
      description: "Direct dispatch from Ali Chowk to your home or workplace across Shahdadpur in heat-insulated delivery bags to keep it oven-hot."
    },
    {
      icon: "✨",
      title: "Halal & Highest Hygiene",
      description: "We follow strict sanitary standards, sanitized preparation stations, and only 100% certified Halal chicken, beef, and dairy."
    }
  ],

  // Customer Reviews (Editable Placeholders)
  reviews: [
    {
      name: "[Ahmed Khan - Shahdadpur Foodie]",
      location: "Near Station Road, Shahdadpur",
      rating: 5,
      date: "[Recent Review]",
      comment: "\"[Customer Review Placeholder]: Hands down the best pizza crust in Shahdadpur! The cheese pull was incredible and it was delivered piping hot to our door in less than 35 minutes.\"",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "[Zainab S. - Ali Chowk Resident]",
      location: "Ali Chowk, Shahdadpur",
      rating: 5,
      date: "[Recent Review]",
      comment: "\"[Customer Review Placeholder]: We ordered the Family Feast deal for a weekend get-together. Every single person loved the spicy barbecue tikka pizza and the stuffed crust!\"",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
    },
    {
      name: "[Bilal Memon - College Road]",
      location: "College Road, Shahdadpur",
      rating: 5,
      date: "[Recent Review]",
      comment: "\"[Customer Review Placeholder]: Great addition to Shahdadpur food scene! Clean packaging, friendly staff at Ali Chowk branch, and very generous chicken toppings.\"",
      avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80"
    }
  ],

  // Frequently Asked Questions
  faqs: [
    {
      q: "Where is Pizza X20 located in Shahdadpur?",
      a: "Our branch is conveniently located at [Shop / Plot No.], Main Ali Chowk, Shahdadpur. It's easily accessible for dine-in, takeaway, and quick pickup."
    },
    {
      q: "How can I place an online order for delivery?",
      a: "Simply click the 'Order via WhatsApp' button or use the interactive cart on this website. It instantly formats your complete order and sends it to our official branch WhatsApp number [+92 3XX XXXXXXX]."
    },
    {
      q: "What are your delivery hours and delivery areas?",
      a: "We deliver across Shahdadpur (including Ali Chowk, Station Road, College Road, Khadim Colony, and adjacent areas) daily from [1:00 PM to 2:00 AM]."
    },
    {
      q: "Do you offer deals for birthdays, school parties, or catering?",
      a: "Yes! We have custom party deals and bulk packages. Contact our manager directly via phone or WhatsApp at [+92 3XX XXXXXXX] for custom group pricing."
    }
  ]
};
