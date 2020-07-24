import { NavItem } from '@graffft-waggle/expandable-side-nav';

import { Kopf } from './Kopf';
import { KopfProps as props } from './types/Kopf.interfaces';
import { KopfHeaderLogoPostion } from './types/Kopf.enums';

// used for build script
export type KopfProps = props;
export type KopfHeaderNavItem = NavItem;
export { Kopf, KopfHeaderLogoPostion };
