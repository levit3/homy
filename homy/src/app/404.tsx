import Error from "@/components/inner-pages/error";
import Wrapper from "@/layouts/Wrapper";

export const metadata = {
  title: "404 error || Homy - Real Estate React Next js Template",
};

export async function generateStaticParams() {
  return [{ "not-found": [] }];
}
const index = () => {
  return (
    <Wrapper>
      <Error />
    </Wrapper>
  );
};

export default index;
