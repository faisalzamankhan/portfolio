import Layout from "../../../components/common/layout";
import ContactLayout from "../../../components/contact/contact";
const Contact = () => {
  return (
    <div className="margin">
      <Layout title={"Contact"} subTitle={"Home/ Contact"} />
      <ContactLayout title={false} />
    </div>
  );
};
export default Contact;
