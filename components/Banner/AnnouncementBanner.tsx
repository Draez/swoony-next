import React, { FC, useState } from "react";
import { useTranslation } from 'next-i18next';
import Link from "next/link";
import { quickSand } from "@/lib/fonts";

interface AnnouncementBannerProps {
    onClose?: () => void;
}

const AnnouncementBanner: FC<AnnouncementBannerProps> = ({ onClose }) => {
    const { t } = useTranslation('common');
    const [isVisible, setIsVisible] = useState(true);

    const handleClose = () => {
        setIsVisible(false);
        onClose?.();
    };

    if (!isVisible) return null;

    return (
        <Link href="/blog/sovellus-uudistuu" className="w-full">
            <div className="w-full relative bg-gradient-to-r from-main-red to-red-600 text-white py-3 px-4 shadow-lg">
                <div className="container mx-auto flex items-center justify-center">
                    <div className="flex items-center space-x-3">


                        {/* Banner Content */}
                        <div className="flex-1">
                            <p className={`${quickSand.className} text-sm font-semibold leading-tight`}>
                                {t('banner.announcement')}
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AnnouncementBanner;
