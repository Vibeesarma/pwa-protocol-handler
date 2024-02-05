import ProtocolModel from "@/components/ProtocolModel";

type HomeProps = {
  searchParams: {
    qr_data?: string;
  };
};

export default function Home({ searchParams: { qr_data } }: HomeProps) {
  return <ProtocolModel qr_data={qr_data} />;
}
