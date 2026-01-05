import CampaignLayout from "../components/CampaignLayout";
import hero from "../assets/health-cannot-wait.jpg";

export default () => (
  <CampaignLayout
    title="Health Cannot Wait"
    heroImage={hero}
    description={<>Last mile delivery of healthcare is always challenging in a country as vast and diverse as India. The uneven distribution of healthcare infrastructure, as well as medical professionals, makes quality healthcare services inaccessible to a large population living in rural areas. Urban slum dwellers, on the other hand, suffer from a lack of awareness, adverse living conditions, and the unwillingness to lose a day’s wage in order to reach the nearest medical facility.<br/>

         <br/>To address these challenges, Hope Foundation’s ‘Health Cannot Wait’ initiative is taking quality healthcare services directly to the doorstep of vulnerable communities, with a focus on women and children. This initiative aims to strengthen the country’s existing healthcare system and reduce out-of-pocket expenses on health for those who need it the most. Awareness activities like school health camps and street plays are also conducted to encourage children and communities to adopt health-seeking behaviors.<br/>

          <br/>But we can't do this alone. The harsh reality is that millions of underprivileged families in India still struggle to access basic healthcare, leading to preventable illnesses and even loss of life. Your support can change that. By contributing to the ‘Health Cannot Wait’ initiative, you will ensure that essential medical care reaches those who need it most—right at their doorstep.<br/>

          <br/>Your donation can save lives and provide a brighter, healthier future for countless women and children across the country. For the poor, health is truly their only wealth. Donate for healthcare NOW and be the difference between hope and despair. Together, we can build a healthier and more equitable India, where no one is left behind.</>}
    seoTitle="Health Cannot Wait | Hope Foundation"
    seoDesc="Healthcare access initiatives by Hope Foundation."
  />
);
