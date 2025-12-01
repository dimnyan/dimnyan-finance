import React from 'react';
import {
  Card,
  Row,
  Col,
  Divider,
  Space,
  Anchor,
  Tag,
  Timeline,
  Alert,
  Table,
} from 'antd';
import {
  // BitcoinOutlined,
  BlockOutlined,
  WalletOutlined,
  RocketOutlined,
  WarningOutlined, BankOutlined, DollarOutlined,
} from '@ant-design/icons';

import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const Crypto = () => {
  const topCoins2025 = [
    {key: 1, coin: 'Bitcoin (BTC)', purpose: 'Digital gold / Store of value', marketCap: 'Dominant'},
    {key: 2, coin: 'Ethereum (ETH)', purpose: 'Smart contracts & DeFi platform', marketCap: '$500B+'},
    {key: 3, coin: 'Solana (SOL)', purpose: 'High-speed Layer 1', marketCap: 'Top 5'},
    {key: 4, coin: 'Binance Coin (BNB)', purpose: 'Binance ecosystem utility', marketCap: 'Top 5'},
    {key: 5, coin: 'Cardano (ADA)', purpose: 'Research-driven Layer 1', marketCap: 'Top 10'},
    {key: 6, coin: 'XRP', purpose: 'Cross-border payments', marketCap: 'Top 10'},
    {key: 7, coin: 'Stablecoins (USDT, USDC)', purpose: '1:1 USD peg', marketCap: '$200B+ combined'},
  ];

  const columns = [
    {title: 'Rank', dataIndex: 'key', width: 70},
    {title: 'Coin', dataIndex: 'coin', key: 'coin'},
    {title: 'Main Purpose', dataIndex: 'purpose', key: 'purpose'},
    {title: 'Status 2025', dataIndex: 'marketCap', key: 'marketCap'},
  ];

  return (
    <Row>
      <Col span={20}>
        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '40px 20px'}}>
          <Title level={1}>Cryptocurrency & Blockchain</Title>
          <Paragraph style={{fontSize: '18px', color: '#595959'}}>
            Understand Bitcoin, Ethereum, DeFi, NFTs, wallets, and blockchain technology | explained clearly, honestly,
            and
            completely free.
          </Paragraph>


          {/* 1. Blockchain Basics */}
          <Divider/>
          <div id="whatis">
            <Title level={3}><BlockOutlined/> What is Blockchain & Cryptocurrency?</Title>
          </div>
          <div className={'p-3'}></div>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="Blockchain in Simple Terms">
                A public, immutable ledger that no single person or company controls.
                <br/><br/>
                Every transaction is verified by thousands of computers worldwide → trustless & tamper-proof.
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Cryptocurrency">
                Digital money that runs on blockchain.<br/>
                No banks needed | you can send $1 or $1M to anyone on Earth 24/7 for pennies.
              </Card>
            </Col>
          </Row>

          {/* 2. Bitcoin */}
          <Divider/>
          <div id="bitcoin">
            <Title level={3}>&#8383; Bitcoin | The Original</Title>
          </div>
          <div className={'p-3'}></div>

          <Card>
            <Paragraph>
              <Text strong>Created:</Text> 2009 by Satoshi Nakamoto (still anonymous)<br/>
              <Text strong>Fixed supply:</Text> 21 million coins ever (last one mined ~2140)<br/>
              <Text strong>Purpose:</Text> Decentralized, censorship-resistant money<br/>
              <Text strong>2025 Status:</Text> Largest asset by market cap, “digital gold”, approved Bitcoin ETFs in USA
            </Paragraph>
            <Tag color="orange" style={{fontSize: '16px', padding: '8px'}}>
              Most proven & safest long-term crypto investment
            </Tag>
          </Card>

          {/* 3. Ethereum & Smart Contracts */}
          <Divider/>
          <div id="ethereum">
            <Title level={3}><BlockOutlined /> Ethereum & Smart Contracts</Title>
          </div>
          <div className={'p-3'}></div>

          <Card>
            <Title level={4}>Ethereum = Programmable Money</Title>
            <ul>
              <li>Smart contracts → self-executing code (loans, insurance, games without middlemen)</li>
              <li>DeFi (Decentralized Finance) runs mostly on Ethereum</li>
              <li>Upgraded to Proof-of-Stake in 2022 → 99.9% less energy</li>
              <li>Layer-2 networks (Arbitrum, Optimism, Base) made it fast & cheap in 2024–2025</li>
            </ul>
          </Card>

          {/* 4. Top Coins 2025 */}
          <Divider/>
          <div id="altcoins">
            <Title level={3}><DollarOutlined /> Top Cryptocurrencies 2025</Title>
          </div>
          <div className={'p-3'}></div>

          <Table
            columns={columns}
            dataSource={topCoins2025}
            pagination={false}
            bordered
          />

          {/* 5. DeFi & Stablecoins */}
          <Divider/>
          <div id="defi">
            <Title level={3}><RocketOutlined/> DeFi, Stablecoins & Earning Yield</Title>
          </div>
          <div className={'p-3'}></div>

          <Alert
            title="You can now earn 4–10% APY on USD stablecoins with almost zero risk using regulated platforms (2025)."
            type="success"
            showIcon
          />
          <Row gutter={[24, 24]} style={{marginTop: 24}}>
            <Col xs={24} md={12}>
              <Card title="Popular Stablecoins">
                USDC (Circle) – Fully backed & audited<br/>
                USDT (Tether) – Largest but controversial reserves<br/>
                DAI – Decentralized & overcollateralized
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Safe Yield Options 2025">
                • Coinbase → 5.1% on USDC<br/>
                • Kraken → 5–7% staking<br/>
                • Aave / Compound → 3–8% on stablecoins (self-custody)
              </Card>
            </Col>
          </Row>

          {/* 6. NFTs & Web3 */}
          <Divider/>
          <div id="nfts">
            <Title level={3}><BlockOutlined /> NFTs & Web3</Title>
          </div>
          <div className={'p-3'}></div>

          <Card>
            <Paragraph>
              NFTs = unique digital assets (art, music, tickets, domain names).<br/>
              2024–2025 shift: real utility (membership passes, gaming items, concert tickets) instead of JPEGs.
            </Paragraph>
          </Card>

          {/* 7. Wallets & Security */}
          <Divider/>
          <div id="wallets">
            <Title level={3}><WalletOutlined/> Wallets & Security Best Practices</Title>
          </div>
          <div className={'p-3'}></div>

          <Timeline style={{marginTop: 24}}>
            <Timeline.Item color="green">Use a hardware wallet (Ledger, Trezor) for &lt; $1,000</Timeline.Item>
            <Timeline.Item color="blue">Enable 2FA everywhere</Timeline.Item>
            <Timeline.Item color="red">Never share your seed phrase with anyone</Timeline.Item>
            <Timeline.Item color="orange">Use a separate hot wallet (MetaMask, Phantom) for small daily
              use</Timeline.Item>
            <Timeline.Item color="gold">Write seed phrase on paper/steel | never digital</Timeline.Item>
          </Timeline>

          {/* 8. Risks & Scams */}
          <Divider/>
          <div id="risks">
            <Title level={3}><WarningOutlined/> Risks & Common Scams (2025)</Title>
          </div>
          <div className={'p-3'}></div>

          <Card type="inner" title="Red Flags">
            <Text type="danger">
              • “Send me crypto and I’ll send double back”<br/>
              • Fake giveaways from hacked celebrity accounts<br/>
              • Rug pulls & meme coins with no utility<br/>
              • Phishing sites that look identical to MetaMask/Ledger<br/>
              • “Guaranteed 100% APY” projects
            </Text>
          </Card>

          {/* 9. Free Downloads */}
          {/*<Divider id="downloads" orientation="horizontal">*/}
          {/*  <Space><DownloadOutlined /> Free Crypto Tools & Checklists</Space>*/}
          {/*</Divider>*/}
          {/*<Row gutter={[16, 24]}>*/}
          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/crypto-portfolio-tracker.xlsx" download><DownloadOutlined /> Excel</a>]}>*/}
          {/*      <Card.Meta title="Crypto Portfolio Tracker" description="Track cost basis, gains, allocation" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/hardware-wallet-checklist.pdf" download><DownloadOutlined /> PDF</a>]}>*/}
          {/*      <Card.Meta title="Hardware Wallet Setup Checklist" description="Step-by-step safe setup guide" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} md={8}>*/}
          {/*    <Card hoverable actions={[<a href="/downloads/crypto-tax-guide-2025.pdf" download><DownloadOutlined /> PDF</a>]}>*/}
          {/*      <Card.Meta title="Crypto Tax Basics 2025" description="How taxes work in major countries" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          <Divider/>
          <Title level={2} style={{textAlign: 'center', color: '#f39c12'}}>
            Start small. Use only reputable exchanges.<br/>
            Never invest more than you can afford to lose.<br/>
            Bitcoin + Ethereum + a hardware wallet = the safest 95% strategy.
          </Title>

        </div>
      </Col>
      <Col span={4}>
        <Anchor
          affix={true}
          offsetTop={100}
          style={{marginBottom: 40}}
          items={[
            {
              key: 'whatis',
              href: '#whatis',
              title: 'What is Blockchain & Cryptocurrency?',
            }, {
              key: 'bitcoin',
              href: '#bitcoin',
              title: 'Bitcoin | The Original',
            }, {
              key: 'ethereum',
              href: '#ethereum',
              title: 'Ethereum & Smart Contracts',
            },
            {
              key: 'altcoins',
              href: '#altcoins',
              title: 'Top Cryptocurrencies 2025',
            },
            {
              key: 'defi',
              href: '#defi',
              title: 'DeFi, Stablecoins & Yield',
            },
            // {
            //   key: 'altcoins',
            //   href: '#altcoins',
            //   title: 'Altcoins & Layer-1s',
            // },
            {
              key: 'nfts',
              href: '#nfts',
              title: 'NFTs & Web3',
            },
            {
              key: 'wallets',
              href: '#wallets',
              title: 'Wallets & Security Best Practices',
            },
            {
              key: 'risks',
              href: '#risks',
              title: 'Risks & Scams to Avoid',
            },
            // {
            //   key: 'downloads',
            //   href: '#downloads',
            //   title: 'Free Tools & Checklists',
            // },
          ]}
        />
      </Col>
    </Row>
  );
};

export default Crypto;