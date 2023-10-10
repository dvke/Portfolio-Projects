import Logo from "@/assets/Logo.png";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="bg-primary-100 py-16 ">
      <div className="justify-content mx-auto w-5/6 gap-16 sm:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          {/* <img src={Logo} alt="logo" /> */}
          <h1 className="text-header-color">Duke's Gym</h1>
          <p className="my-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis
            expedita perspiciatis, inventore ratione qui corrupti repudiandae,
            sapiente.
          </p>
          <p>© Duke'sGym All Rights Reserved</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">Lorem, ipsum dolor.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Lorem, ipsum dolor.</p>
          <p className="my-5">080 1234 5678</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
