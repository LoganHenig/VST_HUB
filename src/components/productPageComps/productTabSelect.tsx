import { useState } from "react";
import { TabView, TabPanel } from 'primereact/tabview';
import { VstCommentSection } from "./commentSection";

export const ProductTabSelect = () => {

    const [activeIndex, setActiveIndex] = useState(0);

    return(
    <>
        <div className="w-full max-w-5xl min-h-96">
            <TabView className="bg-primary-background" activeIndex={activeIndex} onTabChange={(e) => setActiveIndex(e.index)}>
                <TabPanel header="Comments">
                    <VstCommentSection/>
                </TabPanel>
                <TabPanel header="More Information">
                    Content II
                </TabPanel>
                <TabPanel header="Tags">
                    Content III
                </TabPanel>
            </TabView>
        </div>
    </>
    )
}