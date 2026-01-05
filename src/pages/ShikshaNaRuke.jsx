import CampaignLayout from "../components/CampaignLayout";
import hero from "../assets/siksha-na-ruke.jpg";


const ShikshaNaRuke = () => {
  return (
    <CampaignLayout
      title="Shiksha Na Ruke"
      heroImage={hero}
      description={
        <>
       Childhood is said to be the best part of human life – an age where we are carefree, safe and happy. But a happy childhood is not the reality for many children, who are out-of-school. There are many reasons for children to drop out of school – from challenging socio-economic circumstances, to lack of awareness in communities where education is not seen as a priority.<br/>

       <br/>Going to school not only ensures a dignified future and a happy present for children, but also gives them a safe space to express themselves, learn, share and grow. Children who drop out often have to work as child labour, are pushed into child marriages, or even become victims of child trafficking.<br/>

       <br/>Hope Foundation, through its ‘Shiksha Na Ruke’ initiative has been helping children from difficult circumstances continue their education, with the hope of a brighter future and better life. At present, we are directly providing education to over 160,000 children in 27 states of India.<br/>

       <br/>Our education centres are designed to enhance the holistic development of children, and provide them opportunities to grow up as not just educated, but, healthy, aware, well-rounded and responsible individuals. Besides the students, we also work with teachers, parents, caregivers and the whole community so that children have a supportive environment to thrive in.<br/>

       <br/>Despite all the odds, these young champions have not given up and continue to dream and work hard. With your support, we can fuel their dreams with accessible and quality education. Join hands with us to ensure a happy and safe childhood for all!
        </> 
        }
      seoTitle="Shiksha Na Ruke | Hope Foundation"
      seoDesc="Supporting uninterrupted education for underprivileged children across India."
    />
      
  );
};

export default ShikshaNaRuke;
