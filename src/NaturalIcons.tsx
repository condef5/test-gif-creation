import React, { SVGProps } from 'react'

export const geneticValueIcons = {
  def: <Def />,
  atk: <Atk />,
  hp: <Hp />,
  mAtk: <MAtk />,
  mDef: <MDef />,
}

export function Atk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="25"
      height="26"
      viewBox="0 0 25 26"
      fill="none"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.9424 11.5604L17.7868 12.393L16.3976 7.42442L17.5562 7.88209L17.5583 0L12.0779 7.92569L12.1697 11.1976L10.6796 7.21821L9.42206 12.0463L8.18589 19.5969L6.69388 25.613L10.508 20.178L11.3095 21.84L15.9424 11.5604Z"
        fill="currentColor"
      />
      <path
        d="M5.46898 11.3586L5.05272 9.7468L7.87331 5.63519L7.21437 3.96165L11.7337 1.29434L5.56221 2.97282L1.87016 6.88864L0.66333 5.19563L1.31076 11.3855L0 12.8611L4.06362 22.4046L4.30164 19.8103L3.40687 16.3669L4.29862 17.3985L5.46898 11.3586Z"
        fill="currentColor"
      />
      <path
        d="M24.2627 12.3185L22.1962 11.4188L21.6543 5.86511L19.3967 17.7968L16.9526 17.7818L15.709 22.2128L10.9983 25.1404L18.7314 23.4161L22.2543 20.5618L23.1008 21.4829L23.7277 20.151L22.9796 15.6843L24.2627 12.3185Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Def(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="25"
      height="27"
      viewBox="0 0 25 27"
      fill="none"
      color="white"
      style={{ marginTop: '1px' }}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12.5736 0L0 5.34384L2.33581 17.6666L11.0467 27H13.9346L22.7228 17.5302L25 5.35767L12.5736 0ZM21.7184 17.0015L13.4847 25.9153H11.4949L3.33912 17.1349L1.22838 6.00032L12.5706 1.17984L23.7749 6.01063L21.7184 17.0015Z"
        fill="currentColor"
      />
      <path
        d="M3.60513 7.30695L4.92326 15.4403L12.5262 24L20.1231 15.3345L21.3968 7.31644L12.5568 3.7471L3.60513 7.30695ZM6.97028 9.22896L6.35203 14.3575L5.46261 8.36503L11.3865 5.95628L6.97028 9.22896Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function Hp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="27"
      height="22"
      viewBox="0 0 27 22"
      fill="none"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginTop: '6px' }}
      {...props}
    >
      <path
        d="M20.9619 0L13.5001 4.38576L6.03835 0L0 8.00972L13.4974 22H13.5026L27 8.00972L20.9619 0ZM3.67569 7.86096L7.57554 2.84178L5.56137 8.16748L7.65592 12.4024L3.67569 7.86096Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MAtk(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="26"
      height="29"
      viewBox="0 0 26 29"
      fill="none"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7.53849 14.5338L13.9491 20.8937L16.7533 17.8022L13.9491 15.2986V18.1639L10.7068 15.0652L13.9491 12.2668L21.1876 17.5359L13.9491 25.2173L3.47762 14.5162L16.0052 4.62494L13.9069 0L12.4854 4.62494L0 14.5162L13.9491 28.7736L24.8065 17.2617L13.9491 9.54L7.53849 14.5338Z"
        fill="currentColor"
      />
      <path
        d="M7.13756 27.1318L11.3062 28.6299L6.08374 23.2662L7.13756 27.1318Z"
        fill="currentColor"
      />
      <path
        d="M7.15502 4.41822L5.24208 8.41356L11.1079 3.76202L7.15502 4.41822Z"
        fill="currentColor"
      />
      <path
        d="M23.3586 11.7913L18.9887 11.0666L25.0897 15.4049L23.3586 11.7913Z"
        fill="currentColor"
      />
    </svg>
  )
}

export function MDef(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="29"
      height="31"
      viewBox="0 0 29 31"
      fill="none"
      color="white"
      xmlns="http://www.w3.org/2000/svg"
      style={{ marginTop: '1px' }}
      {...props}
    >
      <path
        d="M27.2327 14.5351L29 10.7646L27.5721 10.6821L28.1856 8.16832L24.6527 5.62622L24.6059 6.98115L19.5677 2.69951L19.6067 4.40033L14.5 0.669922L9.39334 4.40033L9.43234 2.69951L4.39413 6.98115L4.34728 5.62622L0.81408 8.16832L1.42787 10.6821L0 10.7646L1.7673 14.5351L0.643521 16.7198L3.48972 20.6982L1.59562 22.7598L6.13534 24.159L5.38914 25.8382L13.2001 30.0885L4.96864 20.7002L2.78953 9.06039L14.5 4.25389L26.2105 9.06039L24.0314 20.7002L15.7999 30.0885L23.6109 25.8382L22.8647 24.159L27.4044 22.7598L25.5103 20.6982L28.3565 16.7198L27.2327 14.5351Z"
        fill="currentColor"
      />
      <path
        d="M23.6426 10.6738L14.4975 6.98126L5.23688 10.664L6.6005 19.078L14.4658 27.3821L22.325 18.9686L23.6426 10.6738ZM8.71818 12.6523L8.07858 17.9579L7.15847 11.7586L13.2868 9.26669L8.71818 12.6523Z"
        fill="currentColor"
      />
    </svg>
  )
}
