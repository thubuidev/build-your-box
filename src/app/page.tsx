import { BoxProvider } from "./context/boxContext";
import PreviewBox from "./containers/PreviewBox";
import StepManagement from "./containers/StepManagement";

export default function Home() {
  return (
    <main className="flex flex-col gap-10 min-h-screen pt-10 px-6 md:px-10  xl:px-30">
      <h1 className="text-3xl sm:text-4xl font-bold text-center sm:text-left">
        Build Your Own Box!
      </h1>

      <BoxProvider>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          <div className="order-1 lg:order-2 space-y-6">
            <StepManagement />
          </div>

          <div className="order-2 lg:order-1 relative md:sticky top-10 h-fit">
            <div className="fade-in-up">
              <PreviewBox />
            </div>
          </div>

        </div>

      </BoxProvider>
    </main>

  );
}
