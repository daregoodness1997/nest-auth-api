import { Comment } from 'src/entities/comment.entity';
import { Topic } from 'src/entities/topic.entity';
import { User } from 'src/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'nest_postgress',
  host: 'dpg-cjhvgeb37aks73cibrbg-a.frankfurt-postgres.render.com',
  port: 5432,
  username: 'nest_postgress_user',
  password: 'iML7rIIspGQKwbsbmjwcBh5cfqBrLu3K',
  entities: [User, Topic, Comment],
  synchronize: true,
  ssl: { rejectUnauthorized: false },
};

export default config;
