'use client'
import React from 'react';
import {
  Card,
  Row,
  Col,
  Divider,
  Anchor,
  Tag,
  Timeline,
  Alert,
  Table, Statistic, Tabs,
} from 'antd';
import {
  // BitcoinOutlined,
  BlockOutlined,
  WalletOutlined,
  RocketOutlined,
  WarningOutlined, DollarOutlined,
} from '@ant-design/icons';
import {createStyles} from 'antd-style';

import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import Text from "antd/es/typography/Text";

const useStyles = createStyles(({token}) => ({
  card: {
    height: '100%',
    transition: 'all 0.3s',
    '&:hover': {transform: 'translateY(-6px)', boxShadow: token.boxShadow},
  },
  heroStat: {
    textAlign: 'center',
    padding: '24px 0px',
    transition: 'all 0.3s',
    boxShadow: token.boxShadow,
    '&:hover': {transform: 'translateY(-6px)', boxShadow: token.boxShadow},
    // background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 100%)',
    borderRadius: 12,
    // color: 'white',
  },
}));

const Crypto = () => {
  const {styles} = useStyles();

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

          {/* Hero Stats */}
          <Row gutter={[24, 24]} style={{margin: '40px 0'}}>
            {/*<Col xs={12} sm={6}>*/}
            {/*  <Card className={styles.heroStat}>*/}
            {/*    <Statistic title="Global Crypto Market Cap" value="$3.2T"/>*/}
            {/*    <Text>+0.92% today</Text>*/}
            {/*  </Card>*/}
            {/*</Col>*/}
            {/*<Col xs={12} sm={6}>*/}
            {/*  <Card className={styles.heroStat}>*/}
            {/*    <Statistic title="Bitcoin Dominance" value="52%"/>*/}
            {/*    <Text>BTC at $86,728</Text>*/}
            {/*  </Card>*/}
            {/*</Col>*/}
            <Col xs={12} sm={12}>
              <Card className={styles.heroStat}>
                <Statistic title="Stablecoin Yields" value="6–14%" suffix="APY"/>
                <Text>On USDC/USDT</Text>
              </Card>
            </Col>
            <Col xs={12} sm={12}>
              <Card className={styles.heroStat}>
                <Statistic title="Active Wallets" value="150M+"/>
                <Text>Daily users worldwide</Text>
              </Card>
            </Col>
          </Row>

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
          <div className={'p-3'}></div>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="How It Works">
                <Text strong>Consensus:</Text> Proof-of-Work (Bitcoin) or Proof-of-Stake (Ethereum) verifies
                transactions.<br/>
                <Text strong>Immutability:</Text> Once added, blocks can&#39;t be altered — forever tamper-proof.<br/>
                <Text strong>Decentralization:</Text> No single point of failure; run by global nodes.
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Why It Matters in 2025">
                • $3.2T market cap<br/>
                • 18,000+ coins tracked<br/>
                • Institutional adoption: BlackRock ETH ETF, $100B+ in custody
              </Card>
            </Col>
          </Row>
          <div className={'p-3'}></div>
          <Alert
            title="Blockchain isn't just crypto — it's the trustless tech powering $10T+ in future value (DeFi, supply chains, voting)."
            type="success"
            showIcon
            style={{marginBottom: 32}}
          />

          {/* 2. Bitcoin */}
          <Divider/>
          <div id="bitcoin">
            <Title level={3}>&#8383; Bitcoin | The Original</Title>
          </div>
          <div className={'p-3'}></div>

          <Paragraph>
            <Text strong>Created:</Text> 2009 by Satoshi Nakamoto (still anonymous)<br/>
          </Paragraph>

          <Card title="Why BTC Wins Long-Term">
            <Timeline
              items={[
                {content: 'Largest asset by market cap, “digital gold”, approved Bitcoin ETFs in USA'},
                {content: 'Fixed 21M supply → scarcity like gold'},
                {content: 'Decentralized, censorship-resistant money'},
                {content: 'Halving cycles → price pumps (next: 2028)'},
                {content: 'ETFs approved → $50B+ inflows in 2025'},
                {content: 'Lightning Network → fast, cheap payments'},
              ]}
            />
          </Card>

          {/*<Row gutter={[24, 24]}>*/}
          {/*  <Col xs={24} md={12}>*/}
          {/*    <Card>*/}
          {/*      <Title level={4}>Key Stats (Dec 1, 2025)</Title>*/}
          {/*      <Statistic title="Price" value={86728} prefix="$" valueStyle={{ color: '#f39c12' }} />*/}
          {/*      <Statistic title="Market Cap" value="$1.7T" valueStyle={{ color: '#f39c12' }} />*/}
          {/*      <Progress percent={95} strokeColor="#f39c12" format={() => 'Supply Mined: 19.7M/21M'} />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} md={12}>*/}
          {/*    <Card title="Why BTC Wins Long-Term">*/}
          {/*      <Timeline*/}
          {/*        items={[*/}
          {/*          { content: 'Largest asset by market cap, “digital gold”, approved Bitcoin ETFs in USA' },*/}
          {/*          { content: 'Fixed 21M supply → scarcity like gold' },*/}
          {/*          { content: 'Decentralized, censorship-resistant money' },*/}
          {/*          { content: 'Halving cycles → price pumps (next: 2028)' },*/}
          {/*          { content: 'ETFs approved → $50B+ inflows in 2025' },*/}
          {/*          { content: 'Lightning Network → fast, cheap payments' },*/}
          {/*        ]}*/}
          {/*      />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          {/* 3. Ethereum & Smart Contracts */}
          <Divider/>
          <div id="ethereum">
            <Title level={3}><BlockOutlined/> Ethereum & Smart Contracts</Title>
          </div>
          <div className={'p-3'}></div>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card>
                <Title level={4}>Ethereum = Programmable Money</Title>
                <ul>
                  <li>Smart contracts → self-executing code (loans, insurance, games without middlemen)</li>
                  <li>DeFi (Decentralized Finance) runs mostly on Ethereum</li>
                  <li>Upgraded to Proof-of-Stake in 2022 → 99.9% less energy</li>
                  <li>Layer-2 networks (Arbitrum, Optimism, Base) made it fast & cheap in 2024–2025</li>
                </ul>
              </Card>
            </Col>

            <Col xs={24} md={12}>
              <Card>
                <Title level={4}>2025 Upgrades: Dencun + Prague</Title>
                <ul>
                  <li><Text strong>Layer 2s:</Text> Arbitrum, Optimism, Base → $0.01 fees, 100k TPS</li>
                  <li><Text strong>Staking:</Text> 32 ETH → 4–6% APY (secure network)</li>
                  <li><Text strong>DeFi TVL:</Text> $150B+ locked, up 40% YoY</li>
                  <li><Text strong>Real-World:</Text> ETH ETFs, BlackRock tokenized funds</li>
                </ul>
              </Card>
            </Col>
          </Row>
          {/* 4. Top Coins 2025 */}
          <Divider/>
          <div id="altcoins">
            <Title level={3}><DollarOutlined/> Top Cryptocurrencies 2025</Title>
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
            title="Stablecoins now yield better than US Treasuries — with global access and no lockups on top platforms."
            type="success"
            showIcon
          />
          <Tabs
            items={[
              {
                key: 'stablecoins',
                label: 'Top Stablecoins 2025',
                children: (
                  <Row gutter={[16, 16]}>
                    <Col span={12}><Tag color="green">USDC</Tag> Regulated, audited ($35B cap)</Col>
                    <Col span={12}><Tag color="blue">USDT</Tag> Largest volume ($120B cap)</Col>
                    <Col span={12}><Tag color="cyan">DAI</Tag> Decentralized, overcollateralized</Col>
                  </Row>
                ),
              },
              {
                key: 'yields',
                label: 'Best Yield Platforms (6–14% APY)',
                children: (
                  <Row gutter={[16, 16]}>
                    <Col span={12}>Nexo / Binance: 6–14% on USDC/USDT (CeFi, easy)</Col>
                    <Col span={12}>Aave V3: 4.67% on USDC (DeFi, secure)</Col>
                    <Col span={12}>Pendle: Up to 13.58% fixed (advanced)</Col>
                    <Col span={12}>Ledn: 8.5% on USDT/USDC (transparent reserves)</Col>
                  </Row>
                ),
              },
            ]}
          />

          {/* 6. NFTs & Web3 */}
          <Divider/>
          <div id="nfts">
            <Title level={3}><BlockOutlined/> NFTs & Web3</Title>
          </div>
          <div className={'p-3'}></div>

          <Card>
            <Title level={4}>2025 Utility Boom</Title>
            <ul>
              <li><Text strong>Gaming:</Text> Axie Infinity, Illuvium → play-to-earn $1B+ economy</li>
              <li><Text strong>Real Assets:</Text> Tokenized real estate, art (e.g., $10M fractional properties)</li>
              <li><Text strong>Social:</Text> ENS domains, POAP badges for events</li>
              <li><Text strong>Market:</Text> OpenSea TVL $5B, up 200% YoY</li>
            </ul>
          </Card>

          {/* 7. Wallets & Security */}
          <Divider/>
          <div id="wallets">
            <Title level={3}><WalletOutlined/> Wallets & Security Best Practices</Title>
          </div>
          <div className={'p-3'}></div>

          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card title="Top Hardware Wallets 2025">
                <ul>
                  <li>Ledger Nano X: Bluetooth, 5,500+ coins ($149)</li>
                  <li>Trezor Safe 3: Open-source, affordable ($79)</li>
                  <li>Cypherock X1: Multi-shard recovery ($199)</li>
                  <li>Grid Lattice Plus: Best for devs ($299)</li>
                </ul>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card title="Top Software Wallets">
                <ul>
                  <li>MetaMask: Ethereum/DeFi essential (browser/mobile)</li>
                  <li>Exodus: Multi-chain, built-in swaps (desktop/mobile)</li>
                  <li>Zengo: Keyless, MPC security (mobile-first)</li>
                  <li>Sparrow: Bitcoin-focused (desktop)</li>
                </ul>
              </Card>
            </Col>
          </Row>
          <Timeline style={{ marginTop: 24 }}
            items={[
              {content: "Hardware for &gt; $1K; software for daily use", color: 'green'},
              {content: "2FA + biometric everywhere", color: 'blue'},
              {content: "Never click unsolicited links — phishing = 70% of hacks", color: 'red'},
              {content: "Seed phrase: Steel backup, never screenshot", color: 'orange'},
              {content: "Use multisig for teams/large holdings", color: 'gold'},
            ]}
          />

          {/* 8. Risks & Scams */}
          <Divider/>
          <div id="risks">
            <Title level={3}><WarningOutlined/> Risks & Common Scams (2025)</Title>
          </div>
          <div className={'p-3'}></div>

          <Card>
            <Title level={4}>Top Threats</Title>
            <ul>
              <li><Text type="danger">Rug Pulls:</Text> Devs drain liquidity (avoid unaudited tokens)</li>
              <li><Text type="danger">Phishing:</Text> Fake sites steal keys (verify URLs)</li>
              <li><Text type="danger">Meme Coins:</Text> 90% fail — stick to top 10</li>
              <li><Text type="danger">Exchange Hacks:</Text> Use self-custody (e.g., FTX 2.0 risks)</li>
            </ul>
            <Text strong>Pro Tip:</Text> Only invest what you can lose. DYOR with CoinGecko/CoinMarketCap.
          </Card>

          {/* 9. Free Downloads */}
          {/*<Divider id="downloads" orientation="horizontal">*/}
          {/*  <Space><DownloadOutlined /> Free Crypto Tools & Checklists</Space>*/}
          {/*</Divider>*/}

          {/*<Row gutter={[24, 32]}>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          cover={<img alt="portfolio" src="/previews/crypto-portfolio.png" style={{ borderRadius: '8px 8px 0 0' }} />}*/}
          {/*          actions={[<a href="/downloads/crypto-portfolio-tracker.xlsx" download><DownloadOutlined /> Download Excel</a>]}*/}
          {/*    >*/}
          {/*      <Meta title="Crypto Portfolio Tracker" description="Cost basis, P&L, allocation dashboard" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/hardware-wallet-setup.pdf" download><DownloadOutlined /> Download PDF</a>]}*/}
          {/*    >*/}
          {/*      <Meta title="Hardware Wallet Setup Guide" description="Ledger/Trezor step-by-step + security checklist" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/crypto-tax-2025.pdf" download><DownloadOutlined /> Download PDF</a>]}*/}
          {/*    >*/}
          {/*      <Meta title="Crypto Tax Guide 2025" description="US/EU/Asia rules, Koinly integration" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*  <Col xs={24} sm={12} lg={6}>*/}
          {/*    <Card hoverable className={styles.card}*/}
          {/*          actions={[<a href="/downloads/defi-yield-calculator.xlsx" download><DownloadOutlined /> Download Excel</a>]}*/}
          {/*    >*/}
          {/*      <Meta title="DeFi Yield Calculator" description="APY projections, risk-adjusted returns" />*/}
          {/*    </Card>*/}
          {/*  </Col>*/}
          {/*</Row>*/}

          <Divider />
          <div style={{ textAlign: 'center', padding: '60px 0' }}>
            <Title level={2} style={{ color: '#f39c12' }}>
              Start with BTC + ETH (80/20).<br />
              Self-custody in Ledger/Trezor.<br />
              Earn yield on stables.<br />
              HODL through volatility.
            </Title>
            {/*<Space size={20} style={{ marginTop: 32 }}>*/}
            {/*  <a href="/downloads/crypto-portfolio-tracker.xlsx" download>*/}
            {/*    <Button type="primary" size="large" icon={<DownloadOutlined />}>*/}
            {/*      Download All Tools (Free)*/}
            {/*    </Button>*/}
            {/*  </a>*/}
            {/*</Space>*/}
          </div>

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