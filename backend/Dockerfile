FROM ruby:3.2.2

# All variables here will be available by default for any container, the default
# values are set from the loaded ARGs in the build time. These environment vars
# can be overwritten by docker compose configs or in ECS task definition.
ENV BACKEND_DIR /backend

RUN apt-get update -yqq && \
    apt-get install -y --no-install-recommends \
        build-essential \
        libpq-dev \
        nodejs

RUN mkdir -p ${BACKEND_DIR}

# `cd` to the `${BACKEND_DIR}` dir, all RUN commands from now will be from this path
WORKDIR ${BACKEND_DIR}

# Copy the Gemfile and Gemfile.lock into the image.
COPY Gemfile* ${BACKEND_DIR}/

# Install gems
RUN bundle install

# Copy all remaining app files to the image
COPY . ${BACKEND_DIR}/

# Delete unnecessary files
RUN rm -rf /gems/cache/

RUN ["chmod", "+x", "./docker-entrypoint.sh"]
RUN ["./docker-entrypoint.sh"]


CMD ["bin/rails", "s", "-b", "0.0.0.0", "-p", "3000"]
