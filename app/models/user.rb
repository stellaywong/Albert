class User < ApplicationRecord
    #FIGVAPER

    validates :username, :email, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6}, allow_nil: true
    attr_reader :password

    after_initialize :ensure_session_token  

    has_many :tracks,
    primary_key: :id,
    foreign_key: :uploader_id,
    class_name: :Track

    has_many :annotations,
    primary_key: :id,
    foreign_key: :annotator_id,
    class_name: :Annotation

    has_many :comments,
    primary_key: :id,
    foreign_key: :commenter_id,
    class_name: :Comment

    has_many :votes,
    primary_key: :id,
    foreign_key: :voter_id,
    class_name: :Vote,
    inverse_of: :voter
        
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