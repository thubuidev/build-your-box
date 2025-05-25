import StepComponent from "./components/StepComponent";
import { BoxProvider } from "./context/boxContext";
import PreviewBox from "./containers/PreviewBox";
import BoxSizeButton from "./components/BoxSizeButton";
import ProductList from "./containers/ProductList";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 min-h-screen pt-10 px-6 md:px-10  xl:px-30">
      <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
        Build Your Own Box!
      </h1>

      <BoxProvider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <StepComponent title="Step 1: Choose Your Bakery Products">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <BoxSizeButton size={6} />
                <BoxSizeButton size={12} />
              </div>
            </StepComponent>

            <StepComponent title="Step 2: Customize Your Box">
              <ProductList />
            </StepComponent>
          </div>

          <div className="sticky top-10 h-fit">
            <div className="fade-in-up">
              <PreviewBox />
            </div>
          </div>
        </div>
      </BoxProvider>
    </main>

  );
}
