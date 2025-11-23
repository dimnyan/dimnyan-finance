import { Button, Card, Table, Divider } from "antd";
import { ArrowLeft, Gift } from "lucide-react";
import Title from "antd/lib/typography/Title";
import Paragraph from "antd/lib/typography/Paragraph";

export default function GovernmentMoney() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <Button type="text" href="/" size="large" className="mb-8">
          <ArrowLeft className="w-5 h-5 mr-2" /> Back
        </Button>

        <Card className="shadow-xl">
          <div className="text-center mb-10">
            <div className="inline-block p-6 bg-green-100 rounded-full mb-6">
              <Gift className="w-16 h-16 text-green-700" />
            </div>
            <Title level={1} className="text-4xl md:text-5xl">3. Claim Your Free Government Money</Title>
            <Paragraph className="text-xl text-gray-600 mt-4">Many people leave $2,000–$10,000+ on the table every year</Paragraph>
          </div>

          <Divider />

          <Table
            dataSource={[
              { benefit: "EITC (USA)", amount: "Up to $7,430", who: "Workers earning <$60k", link: "irs.gov/eitc" },
              { benefit: "SNAP / Food Stamps", amount: "$200–$900/month", who: "Low-income families", link: "fns.usda.gov/snap" },
              { benefit: "Child Tax Credit", amount: "Up to $2,000/child", who: "Parents", link: "irs.gov/ctc" },
              { benefit: "LIHEAP", amount: "$200–$1,000", who: "Help with electricity bill", link: "acf.hhs.gov/ocs/liheap" },
              { benefit: "Indonesia: BPNT/Kartu Sembako", amount: "Rp 200k/month", who: "Low-income", link: "kemensos.go.id" },
            ]}
            columns={[
              { title: "Benefit", dataIndex: "benefit" },
              { title: "Amount", dataIndex: "amount" },
              { title: "Who Qualifies", dataIndex: "who" },
              { title: "Apply Here", dataIndex: "link", render: (t) => <a href={`https://${t}`} target="_blank" rel="noreferrer">{t}</a> },
            ]}
            pagination={false}
          />
        </Card>

        <div className="text-center mt-12">
          <Button type="primary" size="large" href="/micro-investing">
            Next → 4. Start Micro-Investing
          </Button>
        </div>
      </div>
    </div>
  );
}