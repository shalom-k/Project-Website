import MainLayout from "../MainPages/MainLayout";
import CrumbNavAboutMenu from "./CrumbNavAboutMenu";
import MyInformationPage from "./MyInformation";

export default function AboutMeMainLayout() {
    return(
        <MainLayout>
            <CrumbNavAboutMenu/>
            <MyInformationPage/>
        </MainLayout>
    )
}