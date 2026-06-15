import { groq } from 'next-sanity';

export const documentationQuery = groq`
  *[_type == "documentation"
    && ($search == "" || title match $search + "*")
  ] | order(publishedAt desc) {
    _id,
    title,
    publishedAt,
    body,
    image,
  }
`;

export const halamanUtamaQuery = groq`
  *[_type == "halamanUtama"][0] {
    _id,
    title,
    subTitle1,
    body1,
    image1,
    "badgeText1": image1.badgeText,
    "alt1": image1.alt,
    subTitle2,
    body2,
    image2,
    "badgeText2": image2.badgeText,
    "alt2": image2.alt,
  }
`;

export const zonaSiswaQuery = groq`
  *[_type == "zonaSiswa"][0] {
    _id,
    title,
    subTitle,
    body,
    image,
    "badgeText": image.badgeText,
    "alt": image.alt,
    activitiesTitle,
    activitiesSubtitle,
    activities[] {
      title,
      description,
      iconName,
      colorTheme
    }
  }
`;

export const zonaPendampingQuery = groq`
  *[_type == "zonaPendamping"][0] {
    _id,
    title,
    subTitle,
    body,
    image,
    "badgeText": image.badgeText,
    "alt": image.alt,
    strategiesTitle,
    strategiesSubtitle,
    strategies[] {
      title,
      description,
      iconName,
      colorTheme
    },
    useCasesTitle,
    useCasesSubtitle,
    useCasesNote,
    useCases[] {
      title,
      description
    }
  }
`;

export const zonaOrangTuaQuery = groq`
  *[_type == "zonaOrangTua"][0] {
    _id,
    title,
    subTitle,
    body,
    image,
    "badgeText": image.badgeText,
    "alt": image.alt,
    tipsTitle,
    tipsSubtitle,
    tips[] {
      title,
      description,
      iconName,
      colorTheme
    }
  }
`;

export const bukuSinarasQuery = groq`
  *[_type == "bukuSinaras"][0] {
    _id,
    title,
    subTitle,
    body,
    image,
    "badgeText": image.badgeText,
    "alt": image.alt
  }
`;
