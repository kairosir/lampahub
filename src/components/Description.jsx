import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb } from 'lucide-react';

const Description = () => {
  return (
    <section className="section bg-gradient-to-br from-accent/30 to-white">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center space-y-6"
        >
          <Lightbulb className="w-16 h-16 mx-auto text-primary animate-float" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">О нас</h2>
          <div className="prose prose-lg max-w-none space-y-6 font-montserrat leading-relaxed">
            <p className="text-gray-700">
              Творческое пространство "Лампа" - это центр ориентированный на семейные ценности, каждую неделю мы создаём для вас программу, в которой и дети и взрослые находят для себя занятия по интересам, но самое важное мы стремимся создавать мероприятия, когда вы можете провести время со своими детьми по-настоящему плодотворно, познакомиться с ними в игропрактиках и творческих проектах.
            </p>
            <p className="text-gray-700">
              За время работы, мы собрали уникальный коллектив специалистов: психологи, художники, педагоги по дошкольной подготовке и иностранным языкам, творческие мастера рукоделия и прикладного искусства, эксперты разнообразных сфер.
            </p>
            <p className="text-gray-700">
              Мы ценим и любим своих гостей и всегда стараемся создать атмосферу уюта, гостеприимства и пространство для креативного творчества.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Description;