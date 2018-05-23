export default [
  {
    name: "Доставка",
    absolute_url: "/delivery/"
  },
  {
    name: "Каталог",
    absolute_url: "/catalog/",
    submenu: [
      {
        id: 958,
        name: "Вентиляция",
        slug: "ventilaciya",
        thumbnail:
          "https://gdml.ru/i/CACHE/images/ec/50/ec5015fbc2ef978affbfd0853ec55450.jpg",
        absolute_url: "/catalog/ventilaciya/",
        submenu: [
          {
            id: 1020,
            name: "Вентиляторы и решетки",
            slug: "ventilyatory_i_reshetki",
            absolute_url: "/catalog/ventilaciya/ventilyatory_i_reshetki/",
            thumbnail: null,
            submenu: [
              {
                id: 1021,
                name: "Анемостаты",
                slug: "anemostaty",
                absolute_url:
                  "/catalog/ventilaciya/ventilyatory_i_reshetki/anemostaty/",
                thumbnail:
                  "https://gdml.ru/i/CACHE/images/ea/8b/ea8b0d6a47fe57dcc5616b6dfe49d187.jpeg",
                product_count: 6
              },
              {
                id: 1024,
                name: "Вентиляторы канальные",
                slug: "ventilyatory_kanalnyye",
                absolute_url:
                  "/catalog/ventilaciya/ventilyatory_i_reshetki/ventilyatory_kanalnyye/",
                thumbnail:
                  "https://gdml.ru/i/CACHE/images/f7/29/f729515ab7c7fc52b793d0495cebfafc.jpeg",
                product_count: 9
              }
            ]
          }
        ]
      },
      {
        id: 113,
        name: "Гипсокартон, ГВЛ, профили, подвесы",
        slug: "gipsokarton_gvl_profili_podvesy",
        thumbnail:
          "https://gdml.ru/i/CACHE/images/91/8b/918b98d9dbdb12980b23dbb5106bf457.jpg",
        absolute_url: "/catalog/gipsokarton_gvl_profili_podvesy/"
      }
    ]
  }
]