"use client";
import { useEffect, useState } from "react";
import BoxSizeButton from "../components/BoxSizeButton";
import StepComponent from "../components/StepComponent";
import { useBox } from "../context/boxContext";
import ProductList from "./ProductList";

const StepManagement = () => {
    const {currentStep} = useBox();
    const [stepKey, setStepKey] = useState(0)

    useEffect(() => {
        setStepKey(prev => prev + 1)
    }, [currentStep])

    const renderStep = () => {
        switch (currentStep) {
        case 1:
            return (
            <StepComponent title="Step 1: Choose Your Bakery Products">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <BoxSizeButton size={6} />
                <BoxSizeButton size={12} />
                </div>
            </StepComponent>
            )
        case 2:
            return (
            <StepComponent title="Step 2: Customize Your Box">
                <ProductList />
            </StepComponent>
            )
        default:
            return (
            <StepComponent title="Step 1: Choose Your Bakery Products">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                <BoxSizeButton size={6} />
                <BoxSizeButton size={12} />
                </div>
            </StepComponent>
            )
        }
    }

    return (
        <div key={stepKey} className="fade-in-up">
            {renderStep()}
        </div>
    )
       
    
};

export default StepManagement;