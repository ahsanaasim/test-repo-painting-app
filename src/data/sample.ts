export type PaintingSize = "Small" | "Medium" | "Large";

export type Painting = {
  id: string;
  title: string;
  titleBn: string;
  description: string;
  descriptionBn: string;
  price: number;
  size: PaintingSize;
  image: string;
  available: boolean;
  createdAt: string;
  relatedIds: string[];
};

export type OrderStatus = "pending" | "shipped" | "cancelled" | "returned";
export type PaymentMethod = "cod" | "bcash" | "mobile_wallet" | "ssl";

export type Order = {
  id: string;
  paintingId: string;
  buyerName: string;
  buyerPhone: string;
  buyerEmail: string;
  address: string;
  deliveryArea: "dhaka" | "outside";
  deliveryFee: number;
  paymentMethod: PaymentMethod;
  status: OrderStatus;
  createdAt: string;
  requestPending?: boolean;
  requestType?: "cancel" | "return";
  requestReason?: string;
  requestDate?: string;
};

export type NotificationItem = {
  id: string;
  title: string;
  titleBn: string;
  body: string;
  bodyBn: string;
  type: "order" | "payment" | "system" | "promo";
  read: boolean;
  createdAt: string;
  orderId?: string;
};

export const paintings: Painting[] = [
  {
    id: "p1",
    title: "River Mist at Dawn",
    titleBn: "ভোরের নদীকুয়াশা",
    description:
      "Soft watercolor layers capture early light over a Bengali riverbank, with muted blues and warm ochre banks.",
    descriptionBn:
      "নরম ওয়াটারকালার স্তরে বাংলা নদীতীরের ভোরের আলো ধরা হয়েছে, মৃদু নীল ও উষ্ণ গেরুয়া তীর নিয়ে।",
    price: 18500,
    size: "Medium",
    image:
      "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&q=80",
    available: true,
    createdAt: "2026-06-28",
    relatedIds: ["p2", "p3", "p5"],
  },
  {
    id: "p2",
    title: "Monsoon Courtyard",
    titleBn: "বর্ষার উঠোন",
    description:
      "Oil on canvas studying wet terracotta tiles and jasmine vines after a heavy Dhaka downpour.",
    descriptionBn:
      "ঢাকার ভারী বৃষ্টির পর ভেজা টেরাকোটা টাইল ও জুঁই লতা নিয়ে তৈলচিত্র।",
    price: 32000,
    size: "Large",
    image:
      "https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80",
    available: true,
    createdAt: "2026-07-01",
    relatedIds: ["p1", "p4", "p6"],
  },
  {
    id: "p3",
    title: "Old Town Lanterns",
    titleBn: "পুরান শহরের লণ্ঠন",
    description:
      "Acrylic nocturne of alleyway lanterns in Old Dhaka with jewel-toned reflections on brick.",
    descriptionBn:
      "পুরান ঢাকার গলিপথের লণ্ঠনের অ্যাক্রিলিক নৈশচিত্র, ইটের উপর রত্নরঙ প্রতিফলন সহ।",
    price: 12800,
    size: "Small",
    image:
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&q=80",
    available: true,
    createdAt: "2026-06-15",
    relatedIds: ["p1", "p5", "p7"],
  },
  {
    id: "p4",
    title: "Tea Garden Horizon",
    titleBn: "চা বাগানের দিগন্ত",
    description:
      "Impasto landscape of Sylhet tea slopes under a pale monsoon sky.",
    descriptionBn: "সিলেটের চা পাহাড়ের ইম্পাস্টো ল্যান্ডস্কেপ, মৃদু বর্ষার আকাশের নিচে।",
    price: 24500,
    size: "Medium",
    image:
      "https://images.unsplash.com/photo-1515405295579-ba7b45403062?w=800&q=80",
    available: false,
    createdAt: "2026-05-20",
    relatedIds: ["p2", "p6", "p8"],
  },
  {
    id: "p5",
    title: "Canvas of Kantha",
    titleBn: "কাঁথার ক্যানভাস",
    description:
      "Mixed media tribute to kantha stitch patterns reimagined as abstract color fields.",
    descriptionBn:
      "কাঁথা সেলাইয়ের ধরনকে বিমূর্ত রঙক্ষেত্র হিসেবে পুনরায় কল্পনা করা মিক্সড মিডিয়া কাজ।",
    price: 9900,
    size: "Small",
    image:
      "https://images.unsplash.com/photo-1536924940846-227afb31e2a5?w=800&q=80",
    available: true,
    createdAt: "2026-07-05",
    relatedIds: ["p1", "p3", "p7"],
  },
  {
    id: "p6",
    title: "Sundarban Shadows",
    titleBn: "সুন্দরবনের ছায়া",
    description:
      "Charcoal and wash study of mangrove silhouettes at dusk.",
    descriptionBn: "গোধূলিতে ম্যানগ্রোভ সিলুয়েটের চারকোল ও ওয়াশ স্টাডি।",
    price: 27500,
    size: "Large",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&q=80",
    available: true,
    createdAt: "2026-06-02",
    relatedIds: ["p2", "p4", "p8"],
  },
  {
    id: "p7",
    title: "Market Still Life",
    titleBn: "বাজারের স্থিরচিত্র",
    description:
      "Vibrant still life of hilsa, mangoes, and clay pots from a morning bazaar.",
    descriptionBn: "সকালের বাজার থেকে ইলিশ, আম ও মাটির হাঁড়ি নিয়ে জীবন্ত স্থিরচিত্র।",
    price: 15200,
    size: "Medium",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&q=80",
    available: true,
    createdAt: "2026-07-08",
    relatedIds: ["p3", "p5", "p1"],
  },
  {
    id: "p8",
    title: "Coastal Windline",
    titleBn: "উপকূলীয় বাতাসরেখা",
    description:
      "Minimal ink drawing of Cox's Bazar fishing boats along a low horizon.",
    descriptionBn: "নিচু দিগন্ত বরাবর কক্সবাজারের মাছধরা নৌকার ন্যূনতম কালি অঙ্কন।",
    price: 8700,
    size: "Small",
    image:
      "https://images.unsplash.com/photo-1499781350541-7783f6c6a0c8?w=800&q=80",
    available: true,
    createdAt: "2026-04-12",
    relatedIds: ["p4", "p6", "p2"],
  },
];

export const orders: Order[] = [
  {
    id: "ORD-1042",
    paintingId: "p1",
    buyerName: "Nusrat Rahman",
    buyerPhone: "+8801712345678",
    buyerEmail: "nusrat@email.com",
    address: "12 Banani Road, Dhaka 1213",
    deliveryArea: "dhaka",
    deliveryFee: 100,
    paymentMethod: "bcash",
    status: "pending",
    createdAt: "2026-07-10",
  },
  {
    id: "ORD-1038",
    paintingId: "p3",
    buyerName: "Farhan Ahmed",
    buyerPhone: "+8801811223344",
    buyerEmail: "farhan@email.com",
    address: "House 44, Agrabad, Chattogram",
    deliveryArea: "outside",
    deliveryFee: 200,
    paymentMethod: "cod",
    status: "shipped",
    createdAt: "2026-07-02",
  },
  {
    id: "ORD-1031",
    paintingId: "p5",
    buyerName: "Nusrat Rahman",
    buyerPhone: "+8801712345678",
    buyerEmail: "nusrat@email.com",
    address: "12 Banani Road, Dhaka 1213",
    deliveryArea: "dhaka",
    deliveryFee: 100,
    paymentMethod: "ssl",
    status: "pending",
    createdAt: "2026-06-28",
    requestPending: true,
    requestType: "cancel",
    requestReason: "Changed mind before shipment",
    requestDate: "2026-07-11",
  },
  {
    id: "ORD-1025",
    paintingId: "p7",
    buyerName: "Sadia Karim",
    buyerPhone: "+8801919988776",
    buyerEmail: "sadia@email.com",
    address: "Flat 5B, Dhanmondi 27, Dhaka",
    deliveryArea: "dhaka",
    deliveryFee: 100,
    paymentMethod: "mobile_wallet",
    status: "shipped",
    createdAt: "2026-06-18",
  },
];

export const notifications: NotificationItem[] = [
  {
    id: "n1",
    title: "Order ORD-1042 is pending shipment",
    titleBn: "অর্ডার ORD-1042 পাঠানোর অপেক্ষায়",
    body: "Your purchase of River Mist at Dawn is confirmed. The seller will ship soon.",
    bodyBn: "ভোরের নদীকুয়াশা কেনা নিশ্চিত। বিক্রেতা শীঘ্রই পাঠাবেন।",
    type: "order",
    read: false,
    createdAt: "2026-07-10T09:00:00Z",
    orderId: "ORD-1042",
  },
  {
    id: "n2",
    title: "Payment received via bKash",
    titleBn: "বিকাশে পেমেন্ট গৃহীত",
    body: "৳18,600 has been recorded for ORD-1042 including delivery.",
    bodyBn: "ডেলিভারিসহ ORD-1042 এর জন্য ৳১৮,৬০০ রেকর্ড হয়েছে।",
    type: "payment",
    read: false,
    createdAt: "2026-07-10T09:05:00Z",
    orderId: "ORD-1042",
  },
  {
    id: "n3",
    title: "Cancellation request under review",
    titleBn: "বাতিল অনুরোধ পর্যালোচনাধীন",
    body: "Your cancel request for ORD-1031 is pending seller review.",
    bodyBn: "ORD-1031 এর বাতিল অনুরোধ বিক্রেতার পর্যালোচনায় আছে।",
    type: "system",
    read: true,
    createdAt: "2026-07-11T14:20:00Z",
    orderId: "ORD-1031",
  },
  {
    id: "n4",
    title: "New painting tip",
    titleBn: "নতুন পেইন্টিং টিপ",
    body: "Sellers who add size and delivery notes convert 18% more.",
    bodyBn: "যারা আকার ও ডেলিভারি নোট যোগ করেন তাদের কনভার্সন ১৮% বেশি।",
    type: "promo",
    read: true,
    createdAt: "2026-07-08T08:00:00Z",
  },
];

export const currentUser = {
  id: "u1",
  name: "Nusrat Rahman",
  email: "nusrat@email.com",
  phone: "+8801712345678",
  role: "buyer" as "buyer" | "seller" | "guest",
  avatar: "",
};

export const sellerPaintings = paintings.filter((p) =>
  ["p1", "p2", "p3", "p5", "p7"].includes(p.id)
);

export function getPainting(id: string) {
  return paintings.find((p) => p.id === id);
}

export function getOrder(id: string) {
  return orders.find((o) => o.id === id);
}

export function deliveryFeeFor(area: "dhaka" | "outside") {
  return area === "dhaka" ? 100 : 200;
}

export const paymentMethods = [
  {
    id: "cod" as const,
    labelKey: "cashOnDelivery" as const,
    description: "Pay with cash or card when the painting arrives.",
  },
  {
    id: "bcash" as const,
    labelKey: "bcash" as const,
    description: "Pay instantly with your bKash mobile account.",
  },
  {
    id: "mobile_wallet" as const,
    labelKey: "mobileWallet" as const,
    description: "Use Nagad or other supported mobile wallets.",
  },
  {
    id: "ssl" as const,
    labelKey: "sslCommerce" as const,
    description: "Secure card payment via SSL Commerce gateway.",
  },
];
