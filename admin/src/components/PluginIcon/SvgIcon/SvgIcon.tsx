import type { SVGProps } from 'react';
import { forwardRef, Ref } from "react";
import { DefaultTheme, useTheme } from "styled-components";

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'fill' | 'stroke'> {
  /**
   * @default "currentColor"
   */
  fill?: keyof DefaultTheme['colors'] | (string & {});
  stroke?: keyof DefaultTheme['colors'] | (string & {});
}
const SvgIcon = (
  { fill: fillProp = 'currentColor', stroke: strokeProp, ...props }: IconProps,
  ref: Ref<SVGSVGElement>
) => {
  const { colors } = useTheme();
  const fill =
    fillProp && fillProp in colors ? colors[fillProp as keyof DefaultTheme['colors']] : fillProp;
  const stroke =
    strokeProp && strokeProp in colors
      ? colors[strokeProp as keyof DefaultTheme['colors']]
      : strokeProp;
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_1013_10)">
        <mask id="mask0_1013_10" maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="24">
          <path d="M0.5 0.5H31.5V23.5H0.5V0.5Z" fill="white" stroke="white" />
        </mask>
        <g mask="url(#mask0_1013_10)">
          <path
            d="M29 0.5H3C1.61929 0.5 0.5 1.61929 0.5 3V21C0.5 22.3807 1.61929 23.5 3 23.5H29C30.3807 23.5 31.5 22.3807 31.5 21V3C31.5 1.61929 30.3807 0.5 29 0.5Z"
            fill="#8E5CF6"
            stroke="#8E5CF6"
          />
        </g>
        <path
          d="M16 5C12.1341 5 9 8.13413 9 12C9 12.0042 9.00023 12.0082 9.00023 12.0124C9.00023 12.0166 9 12.0205 9 12.0247C9 15.8771 12.1166 19 15.9615 19C15.9664 19 15.9715 18.9995 15.9764 18.9995C15.9846 18.9995 15.9921 19 16 19C19.8659 19 23 15.8659 23 12C23 8.13413 19.8659 5 16 5ZM22.5333 12C22.5333 12.5586 22.4629 13.1006 22.3313 13.6179C22.2704 13.5759 22.1094 13.7495 22.0697 13.5195C22.02 13.2339 21.698 13.0355 21.5246 13.172C21.3513 13.3085 20.8559 13.7054 20.8314 13.9537C20.8064 14.2017 20.5957 14.4995 20.497 14.289C20.3976 14.0781 20.1008 13.4203 20.113 13.2467C20.1251 13.0731 19.9762 13.3088 19.7541 12.9613C19.531 12.6139 19.1472 12.9114 18.8376 12.7378C18.5279 12.564 18.1812 12.3283 18.0076 12.2541C17.8347 12.1794 18.3172 12.9487 18.3793 12.8496C18.4416 12.7504 18.6889 12.924 18.7634 12.924C18.8378 12.924 19.0357 13.0976 18.912 13.2591C18.7883 13.4205 17.6863 14.0911 17.5748 13.9166C17.4628 13.7421 16.8071 12.3904 16.6953 12.4732C16.5838 12.556 17.389 13.9661 17.5253 14.0529C17.6611 14.1399 18.0701 14.0655 18.268 13.9787C18.4663 13.8919 17.8594 14.9465 17.5997 15.0707C17.3398 15.1946 17.1293 15.5793 17.2404 15.7529C17.3519 15.9265 17.3643 16.5843 17.1293 16.6713C16.8937 16.7579 16.8071 16.8944 16.8813 17.0559C16.9553 17.2169 16.7082 17.4896 16.5966 17.6635C16.4849 17.8371 16.0518 18.1969 16.0145 18.2963C15.9776 18.3957 15.4451 18.3707 15.2342 18.3707C15.024 18.3707 15.1847 18.1101 15.1598 17.887C15.1355 17.6635 14.9498 17.4525 14.9498 17.341C14.9498 17.2292 14.8875 16.9686 14.8011 16.8447C14.7146 16.7203 14.6894 16.4847 14.7762 16.3484C14.8632 16.2117 14.9248 15.815 14.7519 15.6412C14.5783 15.4676 14.38 15.1696 14.5165 14.9339C14.6527 14.6983 14.3678 14.7232 14.1326 14.6112C13.8972 14.4995 13.4142 14.6486 13.1666 14.6859C12.9188 14.723 12.6715 14.6238 12.5971 14.4995C12.5229 14.3756 12.3619 14.0655 12.1969 13.9908C12.0324 13.9166 12.1267 13.5939 12.2256 13.47C12.325 13.3461 12.1267 13.1102 12.2256 13.0106C12.325 12.9114 12.3866 12.5518 12.5847 12.4732C12.783 12.3948 12.7457 12.3409 12.7518 12.1547C12.7581 11.9685 12.9746 11.9685 13.0115 11.8693C13.0488 11.7699 13.1601 11.7205 13.3836 11.7205C13.6065 11.7205 13.9838 11.59 14.1634 11.5466C14.3431 11.5032 14.6527 11.4412 14.6278 11.615C14.603 11.7886 14.6093 11.9869 14.7267 11.9869C14.8445 11.9869 15.0055 12.0553 15.1913 12.171C15.377 12.2865 15.3831 12.192 15.408 12.0616C15.433 11.9312 15.6927 11.9809 15.9615 12.105C16.2303 12.2291 16.5969 12.1421 16.714 12.13C16.8318 12.1171 16.8815 11.7639 16.8505 11.646C16.8192 11.5282 16.6337 11.7018 16.5161 11.6274C16.3985 11.5532 16.2373 11.646 16.1199 11.5403C16.0021 11.4351 15.9834 11.1868 16.1199 11.1808C16.256 11.1745 16.3243 11.1311 16.4046 11.0382C16.4853 10.9451 16.7887 10.8893 16.9063 10.9822C17.0236 11.0753 17.1975 11.1374 17.3022 11.0319C17.4075 10.9267 17.0922 10.722 17.0236 10.666C16.9555 10.6103 17.0113 10.4304 16.9434 10.4304C16.875 10.4304 16.8192 10.4612 16.8566 10.5482C16.8937 10.635 16.6585 10.7899 16.6209 10.7034C16.584 10.6163 16.5222 10.449 16.4293 10.449C16.3367 10.449 16.2128 10.8709 16.2065 10.939C16.2002 11.0074 16.0392 11.1189 15.9095 11.1189C15.7797 11.1189 15.7797 11.268 15.8476 11.3364C15.9158 11.4045 15.8661 11.6775 15.7424 11.6932C15.6185 11.709 15.5751 11.6652 15.5567 11.5595C15.5382 11.4542 15.4143 11.4666 15.408 11.2494C15.4017 11.0321 15.2655 10.9269 15.1789 10.8275C15.0923 10.7281 14.8693 10.4367 14.7827 10.5671C14.6961 10.6975 15.0923 10.9766 15.1973 11.0508C15.303 11.1252 15.2844 11.2865 15.2286 11.3238C15.1728 11.3611 15.0676 11.6652 15.0058 11.6897C14.9435 11.7144 14.8844 11.5973 14.8844 11.5973C14.7916 11.5602 15.0142 11.4484 15.0515 11.3926C15.0884 11.3369 14.6616 10.946 14.5846 10.8343C14.5076 10.7225 14.1786 10.9271 14.0302 10.8529C13.8816 10.7787 13.6585 11.132 13.6403 11.3366C13.6214 11.5415 13.3799 11.597 13.1571 11.597C12.9345 11.597 12.7856 11.4297 12.8603 11.2622C12.9345 11.0947 12.8229 10.8156 12.9531 10.7969C13.0831 10.7785 13.4541 10.7969 13.5285 10.5923C13.6027 10.3877 13.1755 10.2015 13.343 10.1644C13.5099 10.127 13.7703 9.86687 13.956 9.71777C14.1413 9.5689 14.1599 9.38293 14.327 9.36987C14.4945 9.35703 14.2901 9.04763 14.4388 8.95477C14.5876 8.86167 14.6245 9.28983 14.736 9.28983C14.8476 9.28983 15.0699 9.2525 15.2559 9.3456C15.4419 9.4387 15.4974 9.2525 15.5718 9.0103C15.646 8.76857 15.8318 8.63813 16.203 8.45217C16.5745 8.26597 15.7762 8.50793 15.6274 8.32173C15.4787 8.13553 15.6831 7.72603 15.7762 7.43693C15.8691 7.1476 15.479 7.72603 15.2746 8.024C15.0699 8.32173 15.3303 8.45193 15.3114 8.65657C15.293 8.86143 14.9591 9.10317 14.9591 9.10317C14.8105 9.12183 14.8289 8.8241 14.7547 8.6939C14.6803 8.5637 14.5501 8.61947 14.3457 8.76833C14.1413 8.9172 14.1228 8.41483 14.0673 8.20997C14.012 8.00557 14.4017 7.7447 14.5848 7.60563C14.7678 7.4661 15.0699 6.79573 15.4045 6.27493C15.7391 5.7539 16.2219 6.0143 16.3519 6.21917C16.4823 6.42357 16.816 6.29337 17.1321 6.66577C17.4481 7.03793 17.0577 7.20523 16.7054 7.05403C16.3519 6.90283 16.7793 7.42877 16.9833 7.57763C17.1877 7.72627 17.2992 7.24257 17.3736 7.13103C17.4478 7.01927 17.7262 7.07527 17.9304 6.7773C18.135 6.47957 18.5991 6.53557 18.8642 6.56823C19.1295 6.60113 19.0634 6.40513 18.8964 6.24483C18.7727 6.1263 19.0256 6.23013 19.3234 6.3755C21.2444 7.51253 22.5333 9.6053 22.5333 12ZM13.2098 9.7768C13.1482 9.7131 13.2721 9.46227 13.3276 9.38783C13.3836 9.3134 13.1727 9.33813 13.1855 9.44383C13.1979 9.54907 13.1048 9.71053 12.9748 9.75393C12.8449 9.79733 12.6967 9.78473 12.7707 9.6669C12.8446 9.54907 12.7767 9.4436 12.721 9.33183C12.6654 9.22007 13.0304 9.15193 13.105 9.0838C13.1792 9.01567 12.9877 8.97203 12.9935 8.8668C12.9998 8.7611 13.0432 8.66823 13.1169 8.65587C13.1914 8.6435 13.2609 8.5959 13.3276 8.6001C13.5323 8.6127 13.4697 9.07773 13.5444 9.22683C13.6186 9.37547 13.8293 9.5556 13.8106 9.68557C13.792 9.816 13.7523 9.89043 13.6006 9.8531C13.4483 9.81577 13.2044 10.0454 13.1111 10.002C13.018 9.95833 13.2721 9.8405 13.2098 9.7768ZM11.8756 7.1679C12.0616 7.26077 12.2097 7.0923 12.3395 7.05613C12.4932 7.01367 12.581 7.55873 12.4326 7.54007C12.2839 7.5214 12.1169 7.8378 11.9022 7.81913C11.6873 7.80047 11.7825 7.65183 11.541 7.42853C11.4892 7.38047 11.468 7.33707 11.4661 7.29903C11.5177 7.24933 11.569 7.1994 11.6224 7.15157C11.706 7.1294 11.8051 7.13267 11.8756 7.1679ZM17.6861 16.5341C17.8594 16.497 17.8261 16.1671 17.9833 16.1496C18.3177 16.1125 17.9957 17.0428 17.872 17.3034C17.7481 17.5641 17.6982 17.5515 17.5804 17.3902C17.4621 17.2292 17.5003 16.9684 17.5804 16.8445C17.6602 16.7201 17.5125 16.5715 17.6861 16.5341Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1013_10">
          <rect width="32" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const ForwardRef = forwardRef(SvgIcon);

export default ForwardRef;