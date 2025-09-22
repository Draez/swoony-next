import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

interface NavigationProps {
    onCloseMenu?: () => void;
}

const NavigationMenu: FC<NavigationProps> = ({
    onCloseMenu,
}) => {
    const { t } = useTranslation('common');
    const router = useRouter();
    const { locale } = router;

    const handleLinkClick = () => {
        if (onCloseMenu) {
            onCloseMenu();
        }
    };

    return (
        <nav className={`flex-1 p-6 space-y-4`}>
            <Link
                href="#howMatchingWorks"
                className="block text-lg font-semibold text-black hover:text-gray transition-colors py-2"
                onClick={handleLinkClick}
            >
                {t('header.howMatchingWorks')}
            </Link>
            <Link
                href="#media"
                className="block text-lg font-semibold text-black hover:text-gray transition-colors py-2"
                onClick={handleLinkClick}
            >
                {t('header.media')}
            </Link>
            <Link
                href="#pricing"
                className="block text-lg font-semibold text-black hover:text-gray transition-colors py-2"
                onClick={handleLinkClick}
            >
                {t('header.pricing')}
            </Link>

            {locale !== 'sv' && (
                <Link
                    href="#ajankohtaista"
                    className="block text-lg font-semibold text-black hover:text-gray transition-colors py-2"
                    onClick={handleLinkClick}
                >
                    {t('header.news')}
                </Link>
            )}
            <Link
                href="#faq"
                className="block text-lg font-semibold text-black hover:text-gray transition-colors py-2"
                onClick={handleLinkClick}
            >
                FAQ
            </Link>
            <Link
                href="#footer-section"
                className="block text-lg font-semibold text-black hover:text-gray transition-colors py-2"
                onClick={handleLinkClick}
            >
                {t('header.newsletter')}
            </Link>
        </nav>
    );


};

export default NavigationMenu;
