import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        pincode: '',
        address: '',
        city: '',
        state: '',
        paymentMode: 'card'
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to your backend
        alert('Order placed successfully! Thank you for your purchase.');
        // Reset form
        setFormData({
            name: '',
            email: '',
            phone: '',
            pincode: '',
            address: '',
            city: '',
            state: '',
            paymentMode: 'card'
        });
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section className="bg-brandDark min-h-screen text-white font-gotham py-20">
            <div className="container mx-auto px-4">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
                >
                    <div className="flex justify-between items-center mb-8">
                        <h1 className="text-3xl font-bold">Checkout</h1>
                        <Link 
                            to="/"
                            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-lg transition-all duration-300"
                        >
                            Back to Home
                        </Link>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="Enter your full name"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="Enter your phone number"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">Pincode</label>
                                <input
                                    type="text"
                                    name="pincode"
                                    value={formData.pincode}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="Enter your pincode"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Delivery Address</label>
                            <textarea
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors min-h-[100px]"
                                placeholder="Enter your complete address"
                                required
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium mb-2">City</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="Enter your city"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-medium mb-2">State</label>
                                <input
                                    type="text"
                                    name="state"
                                    value={formData.state}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                    placeholder="Enter your state"
                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">Payment Mode</label>
                            <select
                                name="paymentMode"
                                value={formData.paymentMode}
                                onChange={handleChange}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg focus:outline-none focus:border-yellow-400 transition-colors"
                                required
                            >
                                <option value="card">Credit/Debit Card</option>
                                <option value="upi">UPI</option>
                                <option value="netbanking">Net Banking</option>
                                <option value="cod">Cash on Delivery</option>
                            </select>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 rounded-lg font-semibold text-black shadow-lg transition-all duration-300"
                            type="submit"
                        >
                            Place Order
                        </motion.button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default CheckoutForm; 