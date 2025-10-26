import svgPaths from "./svg-aej4qlriff";
import imgPhone1 from "figma:asset/3c3f6f101209ab19107e966a2cdb34b69c79fa40.png";
import imgBackImgPhone2 from "figma:asset/edf4e19312d3217346332014dc4ecc6a68f9b48c.png";
import imgAsset164X from "figma:asset/b0fac8b063598a2fe2b8cfc446e6eb031436f9ab.png";
import imgDogA from "figma:asset/553654e8b8690b8ed655cad799305bf1fbe4c645.png";
import imgDagB from "figma:asset/decf13e09414dc95e566e9ab8f95da78685dd7ee.png";
import imgDogD from "figma:asset/548b3d22fd63b382e0c5e543adff89478c488bdd.png";
import imgDogL3 from "figma:asset/2a5db4a5129a8fc0bdad5a90c97724420bc69fba.png";
import imgDogC from "figma:asset/dc06efa71a4532dba88dde62722c7d5f3d842beb.png";

function FeaturesSection() {
  return (
    <div className="absolute h-[48px] left-0 top-0 w-[1280px]" data-name="FeaturesSection">
      <p className="absolute font-['ZCOOL_KuaiLe:Regular',_sans-serif] leading-[48px] left-[640.7px] not-italic text-[#101828] text-[48px] text-center text-nowrap top-[0.5px] tracking-[0.3516px] translate-x-[-50%] whitespace-pre">Fixed Across All Screens</p>
    </div>
  );
}

function FeaturesSection1() {
  return (
    <div className="absolute h-[28px] left-[256px] top-[64px] w-[768px]" data-name="FeaturesSection">
      <p className="absolute font-['Inter:Regular',_'Noto_Sans_KR:Regular',_sans-serif] font-normal leading-[28px] left-[384.2px] not-italic text-[#4a5565] text-[20px] text-center text-nowrap top-0 tracking-[-0.4492px] translate-x-[-50%] whitespace-pre">스마트폰 상단에서 언제나 만날 수 있는 나의 버디, 버디의 상태와 기분을 알 수 있어요!</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[92px] left-[116px] top-[96px] w-[1280px]" data-name="Container">
      <FeaturesSection />
      <FeaturesSection1 />
    </div>
  );
}

function PhoneS() {
  return (
    <div className="absolute contents left-[180px] top-[596px]" data-name="phone-s">
      <div className="absolute h-[2332.53px] left-[180px] top-[596px] w-[1152.94px]" data-name="phone 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgPhone1} />
      </div>
      <div className="absolute left-[730.39px] size-[48.493px] top-[693.01px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 49 49">
          <ellipse cx="24.2465" cy="24.2467" fill="var(--fill-0, black)" id="Ellipse 1" rx="24.2465" ry="24.2467" />
        </svg>
      </div>
    </div>
  );
}

function Levels() {
  return (
    <div className="absolute h-[52.809px] left-[708.12px] top-[48px] w-[259.245px]" data-name="Levels">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 260 53">
        <g id="Levels">
          <path clipRule="evenodd" d={svgPaths.p3f433100} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
          <path clipRule="evenodd" d={svgPaths.p11373400} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
          <g id="Battery">
            <rect height="28.805" id="Border" opacity="0.35" rx="9.1216" stroke="var(--stroke-0, black)" strokeWidth="2.40042" width="57.6101" x="158.444" y="13.2023" />
            <path d={svgPaths.p35495800} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
            <rect fill="var(--fill-0, black)" height="21.6038" id="Capacity" rx="6.00105" width="50.4088" x="162.047" y="16.8016" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function BuildingBlocksStatusBar() {
  return (
    <div className="absolute h-[124.822px] left-[261.51px] rounded-tl-[72.013px] rounded-tr-[72.013px] top-[644.55px] w-[988.973px]" data-name="Building Blocks/status-bar">
      <div className="absolute css-kvvdcb flex flex-col font-['Roboto:Medium',_sans-serif] font-medium justify-center leading-[0] left-[76.81px] text-[33.606px] text-black text-nowrap top-[76.8px] tracking-[0.3361px] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[48.008px] whitespace-pre">9:30</p>
      </div>
      <Levels />
      <div className="absolute left-[calc(50%-0.002px)] size-[57.61px] top-[43.18px] translate-x-[-50%]" data-name="Camera Cutout">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 58">
          <path clipRule="evenodd" d={svgPaths.p14686080} fill="var(--fill-0, black)" fillRule="evenodd" id="Camera Cutout" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-[180px] top-[596px]">
      <div className="absolute h-[2296.16px] left-[213.94px] rounded-bl-[193.973px] rounded-br-[193.973px] rounded-tl-[106.685px] rounded-tr-[106.685px] top-[632.35px] w-[1091.09px]" data-name="back img phone 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-bl-[193.973px] rounded-br-[193.973px] rounded-tl-[106.685px] rounded-tr-[106.685px]">
          <img alt="" className="absolute h-[102.96%] left-0 max-w-none top-0 w-full" src={imgBackImgPhone2} />
        </div>
      </div>
      <PhoneS />
      <BuildingBlocksStatusBar />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[214px] top-[294px]">
      <div className="absolute h-[71px] left-[214px] top-[294px] w-[86px]" data-name="Asset 16@4x">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAsset164X} />
      </div>
      <p className="absolute font-['Noto_Sans:Bold',_sans-serif] font-bold leading-[1.4] left-[219px] text-[15px] text-black text-nowrap top-[395px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Standard
      </p>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[375px] top-[290px]">
      <div className="absolute h-[80px] left-[406px] top-[290px] w-[98px]" data-name="dog_a">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDogA} />
      </div>
      <p className="absolute font-['Noto_Sans:Bold',_sans-serif] font-bold leading-[1.4] left-[387px] text-[15px] text-black text-nowrap top-[395px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Standard-random
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[1.4] left-[375px] text-[15px] text-black top-[439px] w-[160px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        *In the default state, changes occur every 3 hours for 10 minutes.
      </p>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[583px] top-[290px]">
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[1.4] left-[583px] text-[15px] text-black top-[439px] w-[135px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        *When movement is detected
      </p>
      <div className="absolute h-[80px] left-[598px] top-[290px] w-[98px]" data-name="dag_b">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDagB} />
      </div>
      <p className="absolute font-['Noto_Sans:Bold',_sans-serif] font-bold leading-[1.4] left-[619px] text-[15px] text-black text-nowrap top-[395px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Walking
      </p>
    </div>
  );
}

function Group6() {
  return (
    <div className="absolute contents left-[981px] top-[290px]">
      <div className="absolute h-[80px] left-[999px] top-[290px] w-[98px]" data-name="dog_d">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDogD} />
      </div>
      <p className="absolute font-['Noto_Sans:Bold',_sans-serif] font-bold leading-[1.4] left-[1022px] text-[15px] text-black text-nowrap top-[395px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Eating
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[1.4] left-[981px] text-[15px] text-black top-[439px] w-[129px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        *10 minutes after logging a meal
      </p>
    </div>
  );
}

function Group7() {
  return (
    <div className="absolute contents left-[1189px] top-[290px]">
      <div className="absolute h-[80px] left-[1213px] top-[290px] w-[98px]" data-name="dog_L 3">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDogL3} />
      </div>
      <p className="absolute font-['Noto_Sans:Bold',_sans-serif] font-bold leading-[1.4] left-[1248px] text-[15px] text-black text-nowrap top-[395px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Post
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[1.4] left-[1189px] text-[15px] text-black top-[439px] w-[161px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        *When a letter arrives from a friend
      </p>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[765px] top-[290px]">
      <div className="absolute h-[80px] left-[782px] top-[290px] w-[98px]" data-name="dog_c">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgDogC} />
      </div>
      <p className="absolute font-['Noto_Sans:Bold',_sans-serif] font-bold leading-[1.4] left-[802px] text-[15px] text-black text-nowrap top-[395px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        Sleeping
      </p>
      <p className="absolute font-['Noto_Sans:Regular',_sans-serif] font-normal leading-[1.4] left-[765px] text-[15px] text-black top-[439px] w-[132px]" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100" }}>
        *10 minutes after the sleep alert
      </p>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-[116px] top-[290px]">
      <Group2 />
      <Group3 />
      <Group4 />
      <div className="absolute h-0 left-[116px] top-[388px] w-[1280px]">
        <div className="absolute bottom-[-0.75px] left-0 right-0 top-[-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 2">
            <path d="M0 0.75H1280" id="Vector 544" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[116px] top-[426px] w-[1280px]">
        <div className="absolute bottom-[-0.75px] left-0 right-0 top-[-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 2">
            <path d="M0 0.75H1280" id="Vector 545" stroke="var(--stroke-0, black)" strokeDasharray="5 5" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[116px] top-[521px] w-[1280px]">
        <div className="absolute bottom-[-0.75px] left-0 right-0 top-[-0.75px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1280 2">
            <path d="M0 0.75H1280" id="Vector 544" stroke="var(--stroke-0, black)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Group6 />
      <Group7 />
      <Group5 />
    </div>
  );
}

export default function FeaturesSection2() {
  return (
    <div className="bg-[#ffeafd] relative size-full" data-name="FeaturesSection">
      <Container />
      <Group />
      <Group1 />
    </div>
  );
}