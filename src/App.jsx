import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./Component/Button";
const App = () => {
  return (
    <>
      <h1 className="text-5xl font-bold underline">Hello world!</h1>
      <div className="pt-[4.75rem] lg:pt-[5.24rem]">
        <Button className="mt-10" href="#login">
          Login
        </Button>
      </div>
      <ButtonGradient />
    </>
  );
};

export default App;
