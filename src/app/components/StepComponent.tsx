type StepComponentProps = {
  title: string;
  children?: React.ReactNode;
};
const StepComponent = ({ title, children }: StepComponentProps) => (
  <div className="flex flex-col gap-4 mb-5">
    <h2 className="color-[#0D0D1C] font-bold">{title}</h2>
    {children}
  </div>
)

export default StepComponent;
