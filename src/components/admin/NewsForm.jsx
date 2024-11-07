import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

const NewsForm = ({ formData, setFormData, handleSubmit, isEditing, onCancel }) => {
  const handleDateSelect = (date) => {
    setFormData(prev => ({
      ...prev,
      date: format(date, "dd/MM/yyyy")
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6"
    >
      <h2 className="text-2xl font-bold mb-6">
        {isEditing ? 'Редактировать новость' : 'Добавить новость'}
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label className="block text-sm font-medium">Дата</label>
          <div className="flex gap-2">
            <input
              type="text"
              name="date"
              value={formData.date}
              onChange={(e) => setFormData(prev => ({ ...prev, date: e.target.value }))}
              className="flex-1 p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-gray-50"
              placeholder="дд/мм/гггг"
            />
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[40px] p-0",
                    !formData.date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="h-4 w-4" />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={formData.date ? new Date(formData.date.split('/').reverse().join('-')) : undefined}
                  onSelect={(date) => date && handleDateSelect(date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Название</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium">Описание</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            rows={4}
            required
          />
        </div>

        <div className="flex gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="flex-1 bg-primary text-white py-3 rounded-lg font-medium hover:bg-opacity-90"
          >
            {isEditing ? 'Сохранить изменения' : 'Добавить новость'}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onCancel}
            className="flex-1 bg-gray-200 text-gray-800 py-3 rounded-lg font-medium hover:bg-gray-300"
          >
            Отмена
          </motion.button>
        </div>
      </form>
    </motion.div>
  );
};

export default NewsForm;