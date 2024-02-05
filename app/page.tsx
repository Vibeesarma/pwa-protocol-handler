import ProtocolModel from "@/components/ProtocolModel";

export default function Home(props: any) {
  console.log("🚀 ~ Home ~ props:", props);
  return <ProtocolModel props={props} />;
}
