"use client";

import { Bell, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { showToast } from '@/lib/toast';
import { notificationService } from '@/lib/services/api';
import NotificationLoader from "./ui/NotificationLoader";

export default function NotificationsDropdown() {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [unreadCount, setUnreadCount] = useState(0);
    const dropdownRef = useRef(null);

    const fetchNotifications = async () => {
        setLoading(true);
        try {
            const response = await notificationService.getNotifications();

            if (response.data?.type === "success") {
                const data = response.data.data.user_notifications || [];
                setNotifications(data);
                setUnreadCount(data.length);
            }
        } catch (error) {
            console.error(error);
            showToast.error("Failed to load notifications");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchNotifications();
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const formatTime = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            weekday: 'short',
            hour: 'numeric',
            minute: '2-digit'
        });
    };

    return (
        <div className="relative" ref={dropdownRef} data-lenis-prevent="true">
            <button
                onClick={() => {
                    setIsOpen(!isOpen);
                    if (!isOpen) fetchNotifications();
                }}
                className="cursor-pointer relative p-2 text-gray-400 hover:text-brand-navy hover:bg-gray-50 rounded-full transition-all border border-gray-100"
            >
                <Bell size={18} />
                {unreadCount > 0 && (
                    <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
                )}
            </button>

            {isOpen && (
                <div className="absolute right-0 mt-2 w-96 bg-white border border-gray-100 rounded-2xl shadow-2xl z-50 max-h-[460px] overflow-hidden">
                    <div className="flex items-center justify-between px-5 py-4 border-b border-gray-200">
                        <h3 className="font-semibold text-gray-800">Notifications</h3>
                        <button onClick={() => setIsOpen(false)} className="cursor-pointer text-gray-400 hover:text-gray-600">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="max-h-[380px] overflow-y-auto">
                        {loading ? (
                            <div className="flex items-center justify-center p-8">
                                <NotificationLoader />
                            </div>
                        ) : notifications.length === 0 ? (
                            <div className="p-8 text-center text-gray-400">No notifications yet</div>
                        ) : (
                            notifications.map((notif) => (
                                <div
                                    key={notif.id}
                                    className="px-5 py-4 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer"
                                >
                                    <div className="font-semibold text-sm text-gray-900 mb-1">
                                        {notif.title}
                                    </div>

                                    <div className="text-[11px] text-gray-500 mb-2">
                                        {formatTime(notif.created_at)}
                                    </div>

                                    <p className="text-xs text-gray-600 leading-relaxed">
                                        Request Amount : {notif.request_amount} {notif.request_currency},
                                        Total Charge : {parseFloat(notif.total_charge || 0).toFixed(2)},
                                        {notif.payment_type && ` Payment Type : ${notif.payment_type},`}
                                        {notif.method && ` Method : ${notif.method},`}
                                        Payable Amount : {parseFloat(notif.payable_amount || 0).toFixed(2)} {notif.payment_currency}
                                        <br />
                                        <span className="text-emerald-600 font-medium">{notif.message}</span>
                                    </p>
                                </div>
                            ))
                        )}
                    </div>

                    <div className="p-4 text-center">
                        <button className="text-emerald-600 text-sm font-medium hover:underline">
                            View All Notifications
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}