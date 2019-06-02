class User < ApplicationRecord
    #FIGVAPER

    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password

    after_initialize :ensure_session_token  

    # belongs_to :,
    # primary_key: :id,
    # foreign_key: :,
    # class_name: :

    has_many :tracks,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Track

    # has_many :,
    # primary_key: :id,
    # foreign_key: :,
    # class_name: :

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.generate_session_token 
        SecureRandom.urlsafe_base64
    end

    def ensure_session_token 
        self.session_token ||= self.class.generate_session_token
    end

    def reset_session_token!
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token 
    end
end